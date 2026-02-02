// ================= SIDEBAR LOGIC =================
const hamburger = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const dock = document.querySelector('.dock');

// Create overlay
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Toggle sidebar
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  mainContent.classList.toggle('blur');
  dock.classList.toggle('hidden');
});

// Close sidebar on overlay click
overlay.addEventListener('click', closeSidebar);

// Close sidebar on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});

function closeSidebar() {
  hamburger.classList.remove('active');
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  mainContent.classList.remove('blur');
  dock.classList.remove('hidden');
}

// Close sidebar when clicking a link
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

// ================= TIMETABLE (TODAY LOGIC) =================
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date().getDay(); // 0 = Sunday
  const blocks = document.querySelectorAll(".schedule-content");

  if (!blocks.length) return;

  blocks.forEach(block => {
    const day = Number(block.dataset.day);

    if (day === today) {
      // highlight the card
      block.classList.add("today");

      // find existing tag (WEEKDAY / WEEKEND)
      const tag = block.querySelector(".tag");

      if (tag) {
        tag.textContent = "TODAY";
        tag.classList.add("today-tag");
      }

      // scroll into view
      setTimeout(() => {
        block.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 300);
    }
  });
});
