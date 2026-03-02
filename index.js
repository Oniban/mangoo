// ==================== SIDEBAR LOGIC ====================
const hamburger = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const dock = document.querySelector('.dock');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  mainContent.classList.toggle('blur');
  dock.classList.toggle('hidden');
});

overlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

function closeSidebar() {
  hamburger.classList.remove('active');
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  mainContent.classList.remove('blur');
  dock.classList.remove('hidden');
}

sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', closeSidebar));


const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAY_LABELS = {
  Monday: 'MONDAY',
  Tuesday: 'TUESDAY',
  Wednesday: 'WEDNESDAY',
  Thursday: 'THURSDAY',
  Friday: 'FRIDAY',
  Saturday: 'SATURDAY'
};

function buildTimetableHTML(groupNum) {
  const schedule = GROUP_TIMETABLE[groupNum];
  const todayIdx = new Date().getDay();
  const container = document.getElementById('timetableContainer');
  container.innerHTML = '';

  DAYS.forEach((day, i) => {
    const dayNum = i + 1;
    const isToday = (dayNum === todayIdx);
    let slots = (schedule && schedule[day]) ? [...schedule[day]] : [];

    if (day === "Saturday") {
      const extra = JSON.parse(localStorage.getItem('mango_saturday') || '[]');
      slots = extra;
    }

    const card = document.createElement('div');
    card.className = 'timetable-card schedule-content';
    if (isToday) card.classList.add('today');

    let rowsHTML = '';

    if (slots.length === 0) {
      rowsHTML = '<div class="no-class">— No classes scheduled —</div>';
    } else {
      slots.forEach(slot => {
        rowsHTML += `
          <div class="row">
            <span class="time">${slot.time}</span>
            <span class="code">${slot.course}</span>
            <span class="venue">${slot.venue}</span>
          </div>`;
      });
    }

    card.innerHTML = `
      <div class="timetable-header">
        <span class="day">${DAY_LABELS[day]}</span>
        ${isToday ? '<span class="tag today-tag">TODAY</span>' : ''}
      </div>
      ${rowsHTML}`;

    container.appendChild(card);
  });
}

const rollInput = document.getElementById('rollInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
  const roll = rollInput.value.trim().toUpperCase();
  const groupNum = ROLL_TO_GROUP[roll];
  if (!groupNum) return alert("Invalid Roll Number");
  localStorage.setItem('mango_roll', roll);
  buildTimetableHTML(groupNum);
});

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('mango_roll');
  if (saved) {
    rollInput.value = saved;
    buildTimetableHTML(ROLL_TO_GROUP[saved]);
  }
});

const addSatBtn = document.getElementById('addSatBtn');
const removeSatBtn = document.getElementById('removeSatBtn');

addSatBtn.addEventListener('click', () => {
  const time = prompt("Enter Time (e.g. 9:00 AM - 10:00 AM)");
  if (!time) return;

  const subject = prompt("Enter Subject Name");
  if (!subject) return;

  const venue = prompt("Enter Venue");
  if (!venue) return;

  const saturdayClasses = JSON.parse(localStorage.getItem('mango_saturday') || '[]');

  saturdayClasses.push({ time, course: subject, venue });

  localStorage.setItem('mango_saturday', JSON.stringify(saturdayClasses));
  location.reload();
});

removeSatBtn.addEventListener('click', () => {
  localStorage.removeItem('mango_saturday');
  location.reload();
});
