// =====================================================================
// bus.js  –  Parses the SWB multi-column Google Sheet structure
// =====================================================================
//
// Sheet layout (Bus Services tab):
//   Row 15: Bus names  (e.g. "Bus 01- (BR01PM6850)")
//   Row 19: Headers "Departure Time | From | To" repeated per bus column-group
//   Row 20+: Trip data
//
// Uses Google Sheets API v4 with API key for direct access

const SHEET_ID   = "1p0WTx2O5rUEatdvpVtoQwnPEhv86_nZf5F-LMPwEe_s";
const SHEET_NAME = "Bus Services";
const API_KEY    = "AIzaSyDzib7U7GS006jgbbLf21qj3Nxh7e2ZM4I";
const API_URL    = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}?key=${API_KEY}`;

// ── API Response → 2-D grid ──────────────────────────────────────────

function parseAPItoGrid(data) {
  // Google Sheets API returns { range, majorDimension, values }
  // values is already a 2D array
  if (!data.values) return [];
  return data.values.map(row => row.map(cell => String(cell || "").trim()));
}

// ── Time helpers ─────────────────────────────────────────────────────

function normaliseTime(raw) {
  if (!raw) return null;
  raw = raw.trim();
  if (!/^\d{1,2}[:.]\d{2}/.test(raw)) return null;   // must start with digits:digits
  raw = raw.replace(".", ":");                          // some sheets use dot separator
  const ampm  = raw.match(/([ap]m)/i);
  let clean   = raw.replace(/\s*(am|pm)\s*/i, "").trim();
  const parts = clean.split(":");
  let h = parseInt(parts[0], 10);
  let m = parseInt(parts[1], 10) || 0;
  if (isNaN(h) || isNaN(m) || h > 23 || m > 59) return null;
  if (ampm) {
    const s = ampm[1].toLowerCase();
    if (s === "pm" && h !== 12) h += 12;
    if (s === "am" && h === 12) h = 0;
  }
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function to12h(t) {
  let [h, m] = t.split(":").map(Number);
  const s = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${s}`;
}

function toMins(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

// ── Sheet structure parser ────────────────────────────────────────────

function parseBusSheet(grid) {
  const busPat  = /^Bus\s+\d+/i;
  const platePat = /\(([A-Z0-9]+)\)/;

  // 1. Find the row containing bus names
  let busNameRow = -1;
  for (let r = 0; r < grid.length; r++) {
    if (grid[r].some(c => busPat.test(c))) { busNameRow = r; break; }
  }
  if (busNameRow === -1) return [];

  // 2. Find the header row ("Departure Time") just below bus name row
  let headerRow = -1;
  for (let r = busNameRow; r < Math.min(busNameRow + 8, grid.length); r++) {
    if (grid[r].some(c => /departure\s*time/i.test(c))) { headerRow = r; break; }
  }
  if (headerRow === -1) return [];

  // 3. Build bus column groups from header row positions
  const busGroups = [];
  const headerCols = grid[headerRow];
  for (let c = 0; c < headerCols.length; c++) {
    if (/departure\s*time/i.test(headerCols[c])) {
      // Find bus label by searching busNameRow near this column
      let busLabel = "";
      for (let bc = Math.max(0, c - 1); bc <= c + 3; bc++) {
        const cell = (grid[busNameRow][bc] || "");
        if (busPat.test(cell)) {
          const plateMatch = cell.match(platePat);
          const nameMatch  = cell.match(/Bus\s+\d+/i);
          busLabel = plateMatch ? plateMatch[1] : (nameMatch ? nameMatch[0] : cell.split("(")[0].trim());
          break;
        }
      }
      if (!busLabel) busLabel = `Bus ${busGroups.length + 1}`;
      busGroups.push({ busLabel, timeCol: c, fromCol: c + 1, toCol: c + 2 });
    }
  }
  if (busGroups.length === 0) return [];

  // 4. Find where WEEKDAY data ends (either "Weekends" row or big blank gap)
  const dataStart = headerRow + 1;
  let endRow = grid.length;
  let blankRun = 0;
  for (let r = dataStart; r < grid.length; r++) {
    const joined = grid[r].join("").trim();
    if (/weekends/i.test(joined) && joined.length < 40) { endRow = r; break; }
    if (joined === "") { blankRun++; if (blankRun >= 5) { endRow = r - blankRun + 1; break; } }
    else blankRun = 0;
  }

  // 5. Extract trips
  const trips = [];
  for (let r = dataStart; r < endRow; r++) {
    const row = grid[r];
    for (const g of busGroups) {
      const time = normaliseTime(row[g.timeCol]);
      if (!time) continue;
      const from  = (row[g.fromCol] || "").trim();
      const to    = (row[g.toCol]   || "").trim();
      const route = from && to ? `${from} → ${to}` : (from || to || "");
      trips.push({ time, identifier: g.busLabel, route });
    }
  }

  return trips;
}

// ── Render ────────────────────────────────────────────────────────────

function renderBuses(buses) {
  const container = document.getElementById("busContainer");
  container.innerHTML = "";

  if (!buses || buses.length === 0) {
    container.innerHTML = `<div class="empty-state">
      No bus trips found in the sheet.<br>
      <small>Check that the sheet is shared publicly and the "Bus Services" tab exists.</small>
    </div>`;
    return;
  }

  buses.sort((a, b) => toMins(a.time) - toMins(b.time));

  const now     = new Date();
  const nowMins = now.getHours() * 60 + now.getMinutes();
  const nextIdx = buses.findIndex(b => toMins(b.time) >= nowMins);

  // Group by hour
  const groups = {};
  buses.forEach((b, idx) => {
    const hr = b.time.split(":")[0];
    if (!groups[hr]) groups[hr] = [];
    groups[hr].push({ ...b, _idx: idx });
  });

  Object.keys(groups)
    .sort((a, b) => Number(a) - Number(b))
    .forEach(hr => {
      const hrNum = Number(hr);
      const label = `${hrNum % 12 || 12} ${hrNum >= 12 ? "PM" : "AM"}`;

      const card = document.createElement("div");
      card.className = "timetable-card schedule-content";

      const hdr = document.createElement("div");
      hdr.className = "timetable-header";
      hdr.innerHTML = `<span class="day">${label}</span>`;
      card.appendChild(hdr);

      groups[hr].forEach(b => {
        const isNext = b._idx === nextIdx;
        const row    = document.createElement("div");
        row.className = "row" + (isNext ? " next-bus" : "");

        const timeSpan = document.createElement("span");
        timeSpan.className = "time";
        timeSpan.textContent = to12h(b.time);

        const routeSpan = document.createElement("span");
        routeSpan.className = "venue" + (isNext ? " next-bus-route" : "");
        routeSpan.textContent = b.route || "—";

        const idSpan = document.createElement("span");
        idSpan.className = "code";
        idSpan.innerHTML = isNext ? `<span class="next-tag">NEXT</span>` : b.identifier;

        row.appendChild(timeSpan);
        row.appendChild(routeSpan);
        row.appendChild(idSpan);
        card.appendChild(row);
      });

      container.appendChild(card);
    });

  if (nextIdx !== -1) {
    const el = container.querySelector(".next-bus");
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
  }
}

// ── Fetch & load ──────────────────────────────────────────────────────

async function loadBusData() {
  const container  = document.getElementById("busContainer");
  const refreshBtn = document.getElementById("refreshBtn");

  container.innerHTML = `<div class="loading-state"><div class="spinner"></div><p>Fetching live schedule…</p></div>`;
  if (refreshBtn) { refreshBtn.disabled = true; refreshBtn.textContent = "↻ Refreshing…"; }

  try {
    const res  = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const grid = parseAPItoGrid(data);
    const buses = parseBusSheet(grid);
    renderBuses(buses);

    const tsEl = document.getElementById("lastUpdated");
    if (tsEl) {
      const t = new Date();
      tsEl.textContent = `Last fetched: ${t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}  ·  ${buses.length} trips loaded`;
    }
  } catch (err) {
    container.innerHTML = `<div class="error-state">
      <p>⚠️ Could not load bus schedule</p>
      <p class="error-detail">${err.message}</p>
      <p>Make sure the sheet is shared as <strong>Anyone with the link → Viewer</strong>.</p>
    </div>`;
    console.error("Bus fetch error:", err);
  } finally {
    if (refreshBtn) { refreshBtn.disabled = false; refreshBtn.textContent = "↻ Refresh"; }
  }
}

document.addEventListener("DOMContentLoaded", loadBusData);