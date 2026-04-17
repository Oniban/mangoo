/* Autocomplete runs in a closure so it doesn't pollute globals.
   capture:true on the button means this fires BEFORE index.js's
   listener, so rollInput.value is always set when index.js reads it. */
(function () {
  const nameInput = document.getElementById('nameInput');
  const rollInput = document.getElementById('rollInput');
  const dropdown  = document.getElementById('autocompleteDropdown');
  const btn       = document.getElementById('searchBtn');

  let activeIdx = -1;
  let results   = [];

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function hi(text, q) {
    return q
      ? text.replace(new RegExp(`(${esc(q)})`, 'gi'), '<span class="match-highlight">$1</span>')
      : text;
  }

  function renderDropdown(list, q) {
    dropdown.innerHTML = '';
    activeIdx = -1;
    if (!list.length) {
      dropdown.innerHTML = '<div class="dropdown-no-results">No students found</div>';
    } else {
      list.forEach(s => {
        const el = document.createElement('div');
        el.className = 'dropdown-item';
        el.innerHTML =
          `<span class="student-name">${hi(s.name, q)}</span>` +
          `<span class="student-meta"><span class="student-roll">${s.roll}</span>` +
          ` &nbsp;·&nbsp; ${s.group} &nbsp;·&nbsp; ${s.course}</span>`;
        el.addEventListener('mousedown', e => { e.preventDefault(); pick(s); });
        dropdown.appendChild(el);
      });
    }
    dropdown.classList.add('visible');
  }

  function hide() { dropdown.classList.remove('visible'); activeIdx = -1; }

  function pick(student) {
    rollInput.value = student.roll;
    nameInput.value = `${student.name}  (${student.roll})`;
    hide();
    run(student.roll);
  }

  function run(roll) {
    const r = roll.trim().toUpperCase();
    rollInput.value = r;
    const g = ROLL_TO_GROUP[r];
    if (!g) { alert('Roll number not found in timetable data'); return; }
    localStorage.setItem('mango_roll', r);
    buildTimetableHTML(g);   // from index.js
  }

  /* typing */
  nameInput.addEventListener('input', () => {
    const q = nameInput.value.trim();
    rollInput.value = '';
    if (q.length < 2) { hide(); return; }
    const lo = q.toLowerCase();
    results = STUDENTS_DATA
      .filter(s => s.name.toLowerCase().includes(lo) || s.roll.toLowerCase().includes(lo))
      .slice(0, 10);
    renderDropdown(results, q);
  });

  /* keyboard */
  nameInput.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.dropdown-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, -1);
      items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIdx >= 0 && results[activeIdx]) pick(results[activeIdx]);
      else if (results.length === 1)             pick(results[0]);
      else if (rollInput.value)                  run(rollInput.value);
    } else if (e.key === 'Escape') {
      hide();
    }
  });

  nameInput.addEventListener('blur',  () => setTimeout(hide, 150));
  nameInput.addEventListener('focus', () => {
    if (nameInput.value.trim().length >= 2 && results.length)
      dropdown.classList.add('visible');
  });

  /* button — capture so this fires before index.js listener */
  btn.addEventListener('click', () => {
    if (rollInput.value) { run(rollInput.value); return; }
    const raw   = nameInput.value.trim().toUpperCase();
    const exact = STUDENTS_DATA.find(s => s.roll.toUpperCase() === raw);
    if (exact)               { pick(exact);       return; }
    if (results.length === 1){ pick(results[0]);  return; }
    alert('Please select a student from the dropdown list');
  }, true);

  /* restore session */
  window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('mango_roll');
    if (!saved) return;
    rollInput.value = saved;
    const s = STUDENTS_DATA.find(x => x.roll === saved);
    if (s) nameInput.value = `${s.name}  (${saved})`;
  });
})();