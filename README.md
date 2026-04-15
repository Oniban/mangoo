# 🥭 MANGO
### *My Academic Navigation & General Organizer*

> A sleek, zero-dependency web app built for **IIT Patna** students — check your class schedule, today's mess menu, and the next bus, all in one place.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-mangoo--two.vercel.app-brightgreen?style=for-the-badge)](https://mangoo-two.vercel.app)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ What is MANGO?

MANGO is a lightweight, beautifully designed college utility website. No logins, no frameworks, no fuss — just open it and get the information you need. Enter your roll number to pull up your personal timetable, glance at today's mess menu, or check when the next campus bus departs.

---

## 🚀 Features

### 📚 Class Timetable
- Enter your **roll number** to load your personal schedule
- Today's classes are **auto-highlighted** and scrolled into view
- Lab sessions are visually distinct from regular lectures
- Add or remove Saturday classes on the fly

### 🍽️ Mess Menu
- Full weekly menu broken down by meal: Breakfast, Lunch, Snacks, Dinner & Dessert
- Today's meals are automatically highlighted
- Clean card layout with glassmorphism effects

### 🚌 Bus Schedule
- Shows upcoming bus timings from **right now**
- The **next bus is highlighted** so you never have to scan the whole list
- Covers all routes: Aryabhatta ↔ Tut Block ↔ D Quarters
- 12-hour time format for easy reading

### 🎨 Design
- Warm sunset-inspired colour palette (cream, deep navy, sage green, gold)
- Ubuntu-style dock for quick navigation between pages
- Glassmorphism card effects and smooth CSS transitions
- Custom *Gravitas One* typography for headers
- Fully responsive layout

---

## 📂 Project Structure

```
mangoo/
├── index.html          # Timetable page (roll-number lookup)
├── bus.html            # Bus schedule
├── mess.html           # Mess menu
├── exam.html           # Exam room checker (in progress)
│
├── index.js            # Timetable rendering & sidebar logic
├── bus.js              # Bus schedule logic (137 trips!)
├── mess.js             # Mess menu logic
├── timetable-data.js   # All timetable data by roll number
│
├── style.css           # Global styles & theming
│
└── images/             # Icons and background assets
```

---

## 🛠️ Getting Started

No build step, no package manager — just a browser.

```bash
# 1. Clone the repo
git clone https://github.com/Oniban/mangoo.git
cd mangoo

# 2. Open in your browser
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux
```

Or simply visit the live deployment: **[mangoo-two.vercel.app](https://mangoo-two.vercel.app)**

---

## 🎨 Colour Palette

| Role        | Hex       | Preview |
|-------------|-----------|---------|
| Background  | `#F2E1BF` | Warm cream |
| Primary     | `#253A5A` | Deep navy |
| Accent      | `#AFC3B4` | Sage green |
| Highlight   | `#FFD700` | Sunset gold |
| Cards       | `#111111` | Rich black |

---

## 🧩 Customisation

### Update your timetable
Edit `timetable-data.js` to add or modify roll-number entries with their corresponding schedules.

### Change the mess menu
Open `mess.js` and update the `menuData` array with your mess's weekly meals.

### Edit bus timings
Open `bus.js` and modify the `buses` array:
```js
{ bus: "Bus 01", time: "08:00", from: "Aryabhatta", to: "Tut Block" }
```

### Add study resource links
In `index.html`, find the `<nav>` inside `.sidebar-content` and add `<li><a href="...">Subject</a></li>` entries.

---

## 🔭 Roadmap

- [ ] Dark mode toggle
- [ ] Mobile PWA / offline support
- [ ] Notifications for upcoming classes
- [ ] Assignment & deadline tracker
- [ ] Grade calculator
- [ ] Export timetable to PDF
- [ ] Exam room checker (partially built — `exam.html`)

---

## 🤝 Contributing

Contributions are welcome! IIT Patna students especially — if your timetable data is missing or the bus timings have changed, open a PR.

```bash
# 1. Fork the repo & create a branch
git checkout -b feature/your-feature-name

# 2. Make your changes, then commit
git commit -m "feat: describe your change"

# 3. Push and open a Pull Request
git push origin feature/your-feature-name
```

---

## 📄 License

Open source under the [MIT License](LICENSE).

---

<div align="center">

Built with ☕ and late-night coding sessions at **IIT Patna**

*Because organising student life shouldn't be complicated.*

⭐ Star this repo if it saved you from missing the bus!

</div>
