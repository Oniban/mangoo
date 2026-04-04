// ─── Exam Data (Spring 2026) ────────────────────────────────
// All dates/shifts extracted from the official End-Sem schedule.
// Shift times: Morning → 09:30 AM – 12:30 PM | Evening → 3:00 PM – 6:00 PM

const examData = {
  CS1201: { date: "06-05-2026", day: "Wednesday", shift: "Morning (09:30 AM – 12:30 PM)", name: "Data Structures" },
  ME1202: { date: "29-04-2026", day: "Wednesday", shift: "Morning (09:30 AM – 12:30 PM)", name: "Engineering Drawing" },
  CH1201: { date: "05-05-2026", day: "Tuesday",   shift: "Morning (09:30 AM – 12:30 PM)", name: "Chemistry" },
  MA1201: { date: "04-05-2026", day: "Monday",    shift: "Morning (09:30 AM – 12:30 PM)", name: "Mathematics" },
  IK1201: { date: "30-04-2026", day: "Thursday",  shift: "Morning (09:30 AM – 12:30 PM)", name: "Indian Knowledge System" },
  PH1201: { date: "05-05-2026", day: "Tuesday",   shift: "Morning (09:30 AM – 12:30 PM)", name: "Physics" },
  EE1201: { date: "01-05-2026", day: "Friday",    shift: "Morning (09:30 AM – 12:30 PM)", name: "Electrical" },
  CE1201: { date: "07-05-2026", day: "Thursday",  shift: "Morning (09:30 AM – 12:30 PM)", name: "Engineering Mechanics" },
};

// ─── Branch Definitions ─────────────────────────────────────
const branches = {
  mech: {
    label: "Mech Sem",
    subjects: ["ME1202", "IK1201", "MA1201", "CH1201", "CS1201"],
  },
  elec: {
    label: "Elec Sem",
    subjects: ["IK1201", "MA1201", "PH1201", "EE1201", "CS1201", "CE1201"],
  },
};

// ─── Helpers ────────────────────────────────────────────────
function parseDate(dateStr) {
  // "06-05-2026" → Date object (day-month-year)
  const [d, m, y] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function isToday(dateStr) {
  const d = parseDate(dateStr);
  const now = new Date();
  return d.getDate() === now.getDate() &&
         d.getMonth() === now.getMonth() &&
         d.getFullYear() === now.getFullYear();
}

// Sort by calendar date
function sortedExams(subjects) {
  return subjects
    .map(code => ({ code, ...examData[code] }))
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

// ─── Render ─────────────────────────────────────────────────
function selectBranch(branch) {
  // Update button states
  document.getElementById("mechBtn").classList.toggle("active", branch === "mech");
  document.getElementById("elecBtn").classList.toggle("active", branch === "elec");

  const container = document.getElementById("examContainer");
  const exams = sortedExams(branches[branch].subjects);

  if (!exams.length) {
    container.innerHTML = `<p class="no-exams">No exams found for this branch.</p>`;
    return;
  }

  container.innerHTML = exams.map(exam => {
    const today = isToday(exam.date);
    return `
      <div class="exam-card ${today ? "today-exam" : ""}">
        <div class="exam-card-inner">
          <div class="subject-left">
            <div class="subject-code">${exam.code}</div>
            <div class="subject-name">${exam.name}</div>
          </div>
          <div class="exam-meta">
            <div class="exam-date">${exam.date}</div>
            <div class="exam-day">${exam.day}</div>
            <div class="exam-shift">${exam.shift}</div>
            ${today ? `<span class="today-badge">TODAY</span>` : ""}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ─── Init ────────────────────────────────────────────────────
selectBranch("mech");