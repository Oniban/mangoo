// ─── Bus Schedule Data ──────────────────────────────────────
const buses = [
  { bus: "Bus 04",       time: "07:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "07:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "08:05", from: "D Quarters",            to: "Aryabhatta"             },
  { bus: "Bus 04",       time: "08:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "08:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "08:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "08:35", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 02",       time: "08:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "08:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "08:48", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "08:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "08:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "08:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "08:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "09:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "09:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "09:06", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "09:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "09:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "09:20", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "09:20", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 02",       time: "09:25", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "09:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "09:35", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "09:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "09:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "09:45", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "09:48", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "09:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "09:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "09:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "10:00", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "10:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "10:06", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "10:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "10:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "10:20", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 03",       time: "10:20", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "10:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "10:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "10:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "10:45", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "10:48", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "10:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "10:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "10:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "11:00", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "11:06", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "11:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "11:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "11:15", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "11:20", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 04",       time: "11:25", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "11:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "11:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "11:35", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "11:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "11:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "11:45", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "11:48", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "11:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "11:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "11:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "12:00", from: "Tut Block",             to: "Aryabhatta"             },
  { bus: "Bus 03",       time: "12:00", from: "Tut Block",             to: "Aryabhatta"             },
  { bus: "Bus 02",       time: "12:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "12:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "12:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "12:20", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 02",       time: "12:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "12:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "12:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "12:48", from: "Tut Block",             to: "Aryabhatta"             },
  { bus: "Bus 02",       time: "12:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "12:55", from: "Tut Block",             to: "Aryabhatta"             },
  { bus: "Bus 04",       time: "12:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "13:00", from: "Tut Block",             to: "Aryabhatta"             },
  { bus: "Bus 03",       time: "13:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "13:05", from: "Tut Block",             to: "Aryabhatta"             },
  { bus: "Bus 01",       time: "13:10", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 02",       time: "13:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "13:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "13:47", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "13:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "13:53", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "13:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "13:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "14:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "14:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "14:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "14:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "14:15", from: "IIT Patna (Aryabhatta)", to: "Bihar Museum"          },
  { bus: "Bus 02",       time: "14:25", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 04",       time: "14:25", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "14:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "14:35", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "14:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "14:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "14:48", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "14:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "14:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "14:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "15:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "15:06", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "15:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "15:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "15:20", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 02",       time: "15:25", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "15:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "15:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "15:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Institute Bus",time: "15:48", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "15:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "15:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "15:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "16:00", from: "Bihar Museum",          to: "IIT Patna (Aryabhatta)" },
  { bus: "Institute Bus",time: "16:05", from: "Tut Block",             to: "Aryabhatta"             },
  { bus: "Bus 02",       time: "16:10", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 02",       time: "16:30", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "16:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "16:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "16:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "16:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "17:10", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "17:20", from: "Aryabhatta",            to: "D Quarters"             },
  { bus: "Bus 02",       time: "17:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "17:40", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "17:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "17:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "17:55", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "18:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 02",       time: "18:15", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 04",       time: "18:20", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "18:50", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 03",       time: "19:05", from: "Aryabhatta",            to: "Tut Block"              },
  { bus: "Bus 01",       time: "20:00", from: "D Quarters",            to: "Aryabhatta"             },
  { bus: "Bus 01",       time: "20:35", from: "Aryabhatta",            to: "D Quarters"             },
];

// ─── Helpers ─────────────────────────────────────────────────

function toMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

function formatTime12h(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}

// "14" → "2 PM",  "9" → "9 AM"
function hourLabel(h) {
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:00 ${period}`;
}

// ─── Main ─────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("busContainer");
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentHour = now.getHours(); // 0–23

  // All upcoming buses from right now, sorted
  const upcoming = buses
    .filter(b => toMinutes(b.time) >= currentMinutes)
    .sort((a, b) => toMinutes(a.time) - toMinutes(b.time));

  if (upcoming.length === 0) {
    container.innerHTML = `
      <p style="text-align:center; padding:40px; font-family:'coolfont'; font-size:1.1em; color:#AFC3B4;">
        No more buses today 🚫
      </p>`;
    return;
  }

  // ── Group into hourly buckets ─────────────────────────────
  // Key = hour (0–23). First bucket is the current hour (partial: from now).
  const buckets = new Map();
  for (const b of upcoming) {
    const h = Math.floor(toMinutes(b.time) / 60);
    if (!buckets.has(h)) buckets.set(h, []);
    buckets.get(h).push(b);
  }

  // Sort bucket keys chronologically
  const hours = [...buckets.keys()].sort((a, b) => a - b);

  // Track the very first bus across all buckets for the NEXT BUS badge
  let isFirstBus = true;

  hours.forEach(hour => {
    const group = buckets.get(hour);
    const isCurrentHour = hour === currentHour;

    // ── Card label ──────────────────────────────────────────
    // First card: "Now → 3:00 PM"   Subsequent: "3:00 PM → 4:00 PM"
    const fromLabel = isCurrentHour
      ? `Now (${formatTime12h(group[0].time)})`
      : hourLabel(hour);
    const toLabel = hourLabel(hour + 1);

    // ── Build card ──────────────────────────────────────────
    const card = document.createElement("div");
    card.className = "timetable-card schedule-content" + (isCurrentHour ? " current-hour-card" : "");

    // Card header
    const header = document.createElement("div");
    header.className = "timetable-header";
    header.innerHTML = `
      <span class="day">${fromLabel} &rarr; ${toLabel}</span>
      <span class="tag">${isCurrentHour ? "NOW" : hourLabel(hour)}</span>
    `;
    card.appendChild(header);

    // One row per bus in this bucket
    group.forEach(b => {
      const isNext = isFirstBus;
      if (isFirstBus) isFirstBus = false;

      const row = document.createElement("div");
      row.className = "row" + (isNext ? " next-bus-row" : "");
      row.innerHTML = `
        <span class="time">${formatTime12h(b.time)}</span>
        <span class="code">${b.bus}</span>
        <span class="venue bus-route">${b.from} &rarr; ${b.to}${isNext ? ' <span class="tag next-tag">NEXT</span>' : ""}</span>
      `;
      card.appendChild(row);
    });

    container.appendChild(card);
  });
});