# 🥭 MANGO

> **M**y **A**cademic **N**avigation & **G**eneral **O**rganizer

A sleek, student-designed web application for IIT Patna students to track class schedules, mess menus, and bus timings - all in one beautiful interface.

![MANGO Banner](https://img.shields.io/badge/Made%20with-Love%20%26%20Code-FF6B6B?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

### 📚 **Class Timetable**
- **Auto-highlights today's schedule** with a glowing accent
- Clean, card-based layout for each day of the week
- Automatically scrolls to today's classes on page load
- Lab sessions marked distinctly for easy identification

### 🍽️ **Mess Menu**
- Complete weekly mess menu with daily meals
- **Today's menu highlighted** for quick reference
- Organized by meal type: Breakfast, Lunch, Snacks, Dinner, Dessert
- Beautiful card design with blurred background effects

### 🚌 **Bus Schedule**
- Real-time bus timings from current time onwards
- **Next bus highlighted** with special styling
- Shows all bus routes: Aryabhatta ↔ Tut Block ↔ D Quarters
- 12-hour time format for easy reading

### 🎨 **Design Highlights**
- **Sunset-themed color palette** with warm golds and deep blues
- **Ubuntu-style dock** for quick navigation
- **Glassmorphism effects** and blurred backgrounds
- **Smooth animations** and transitions throughout
- **Responsive sidebar** with study material links
- Custom typography using "Gravitas One" font

---

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mango.git
   cd mango
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # or
   start index.html
   ```

3. **Enjoy!** 🎉

---

## 📂 Project Structure

```
mango/
│
├── index.html          # Main timetable page
├── bus.html            # Bus schedule page
├── mess.html           # Mess menu page
│
├── index.js            # Timetable & sidebar logic
├── bus.js              # Bus schedule logic (137 trips!)
├── mess.js             # Mess menu logic
│
├── style.css           # Global styles
│
└── images/             # Icons and background images
    ├── bookk.png
    ├── bus icon.png
    ├── fooood.png
    └── 81CvJNeGE8L._AC_UF894,1000_QL80_.jpg
```

---

## 🎯 Key Components

### Sidebar Navigation
Access important study materials with one click:
- Mathematics resources
- Chemistry notes
- Mechanics materials
- CS course content

### Smart Highlighting
The app automatically detects the current day and:
- Highlights today's timetable card
- Changes the tag from "WEEKDAY" to "TODAY"
- Scrolls to the relevant section
- Applies special glow effects

### Dock Interface
Quick-access buttons for:
- 📖 Study Materials (opens sidebar)
- 🚌 Bus Schedule
- 🍽️ Mess Menu

---

## 🛠️ Technologies Used

- **Pure HTML5** - Semantic markup
- **CSS3** - Advanced styling with CSS Grid, Flexbox, and custom animations
- **Vanilla JavaScript** - No frameworks, just clean ES6+
- **Custom Fonts** - Gravitas One for headers
- **CSS Variables** - For consistent theming

---

## 🎨 Color Palette

```css
Background:   #F2E1BF  /* Warm cream */
Primary:      #253A5A  /* Deep navy */
Accent:       #AFC3B4  /* Sage green */
Highlight:    #FFD700  /* Sunset gold */
Cards:        #111111  /* Rich black */
```

---

## ⚡ Performance Features

- **Zero dependencies** - No heavy frameworks or libraries
- **Lightweight** - Fast load times
- **Optimized** - Minimal DOM manipulation
- **Smooth animations** - Hardware-accelerated CSS transitions

---

## 🔮 Future Enhancements

- [ ] Dark mode toggle
- [ ] Export timetable as PDF
- [ ] Notifications for upcoming classes
- [ ] Mobile app version
- [ ] Custom timetable editor
- [ ] Integration with campus WiFi for auto-detection
- [ ] Assignment tracker
- [ ] Grade calculator

---

## 📱 Screenshots

### Main Timetable
*Clean, organized view of your weekly schedule*

### Bus Schedule
*Never miss the bus again with real-time next bus highlighting*

### Mess Menu
*Know what's for dinner before you head to the mess*

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Customization Guide

### Adding Your Own Timetable

Edit `index.html` and modify the timetable cards:

```html
<div class="timetable-card schedule-content" data-day="1">
  <div class="timetable-header">
    <span class="day">MONDAY</span>
    <span class="tag">WEEKDAY</span>
  </div>
  <div class="row">
    <span class="time">9 AM - 10 AM</span>
    <span class="code">YOUR SUBJECT</span>
    <span class="venue">YOUR VENUE</span>
  </div>
  <!-- Add more rows -->
</div>
```

### Updating Bus Schedule

Edit the `buses` array in `bus.js`:

```javascript
{
  "bus": "Bus 01",
  "time": "08:00",
  "from": "Starting Point",
  "to": "Destination"
}
```

### Modifying Mess Menu

Update the `menuData` array in `mess.js` with your mess menu items.

---

## 🐛 Known Issues

- Background images require local file paths (update with your images)
- Custom font files need to be present in `/images` directory

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💡 Inspiration

Built with 💙 for students, by students at **IIT Patna**

*Because organizing student life shouldn't be complicated.*

---

## 📬 Contact

Have suggestions or found a bug? Feel free to reach out!

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ☕ and late-night coding sessions**

</div>
