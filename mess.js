const menuData = [
  {
    Day: "Monday",
    Breakfast: "Aloo Paratha + Green Chutney + Tomato Sauce + Curd",
    Lunch: "Sev Tamatar Sabji + Chana Dal + Plain Rice + Fryums + Roti",
    Snacks: "Samosa + Chutney + Tea",
    Dinner: "Paneer Tikka Masala / Butter Chicken + Dal Fry + Plain Rice + Roti",
    Dessert: "Custard"
  },
  {
    Day: "Tuesday",
    Breakfast: "Poori + Aloo Dry + Jalebi + Egg Bhurji",
    Lunch: "Seasonal Sabji + Pyaz Pakoda + Chana Dal + Jeera Rice + Papad + Roti",
    Snacks: "Peri Peri Fries + Coffee",
    Dinner: "Gatte ki Sabji + Chana Dal + Tomato Rice + Roti + Fryums",
    Dessert: "Gulab Jamun"
  },
  {
    Day: "Wednesday",
    Breakfast: "Masala Upma + Chutney + Sambar + Sprouts Chaat",
    Lunch: "Kadhi + Mix Dal + Rice + Aloo Bhujia + Fryums + Roti",
    Snacks: "Pyaaz Kachori + Tea",
    Dinner: "Paneer Lababdar / Kolhapuri Chicken / Chilli Chicken + Jeera Rice + Roti + Dal",
    Dessert: ""
  },
  {
    Day: "Thursday",
    Breakfast: "Mix Veg Paratha + Red & Green Chutney",
    Lunch: "Chole + Methi Matar Malai + Papad + Rice + Roti",
    Snacks: "Spring Roll + Coffee",
    Dinner: "Dry Manchurian + Aloo Soyabean + Dal Tadka + Roti + Fried Rice",
    Dessert: "Rabdi Jalebi"
  },
  {
    Day: "Friday",
    Breakfast: "Vada + Uttapam + Masala Idli + Sambar & Chutney",
    Lunch: "Dum Aloo + Dal Tadka + Fried Rice + Roti + Fryums",
    Snacks: "Bread Pakoda + Tea",
    Dinner: "Butter Paneer Masala / Hyderabadi Chicken / Kadhai Chicken + Rice + Roti + Dal",
    Dessert: "Ras Malai"
  },
  {
    Day: "Saturday",
    Breakfast: "Sandwich + Chutney + Ketchup + Sprouts Chaat",
    Lunch: "Lauki Chana + Rajma + Rice + Roti + Papad",
    Snacks: "Golgappe + Coffee",
    Dinner: "Malai Kofta + Egg Curry + Rice + Roti + Dal",
    Dessert: "Shahi Tukda / Balushahi"
  },
  {
    Day: "Sunday",
    Breakfast: "Masala Dosa + Sambar & Chutney",
    Lunch: "Chole Bhature + Dal Fry + Jeera Rice + Boondi Raita",
    Snacks: "Punugulu + Peanut Chutney + Tea",
    Dinner: "Chicken & Veg Biryani + Raita + Gravy",
    Dessert: "Ice Cream"
  },
  {
    Day: "Everyday",
    Breakfast: "Milk + Bread + Butter + Jam + Tea + Cornflakes + Egg + Fruits",
    Lunch: "Salad + Pickle",
    Snacks: "Toast",
    Dinner: "Salad + Pickle",
    Dessert: ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menuContainer");

  const today = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[today];

  let todayMenu = null;
  let everydayMenu = null;

  menuData.forEach(day => {
    if (day.Day === todayName) todayMenu = day;
    if (day.Day === "Everyday") everydayMenu = day;
  });

  if (todayMenu) renderDay(todayMenu, true);
  if (everydayMenu) renderDay(everydayMenu, false);

  menuData.forEach(day => {
    if (day.Day !== todayName && day.Day !== "Everyday") {
      renderDay(day, false);
    }
  });

  function renderDay(day, isToday) {
    const card = document.createElement("div");
    card.className = "menu-day";
    if (isToday) card.classList.add("today");

    let sections = "";

    ["Breakfast", "Lunch", "Snacks", "Dinner", "Dessert"].forEach(meal => {
      if (day[meal]) {
        sections += `
          <div class="meal-section">
            <div class="meal-title">${meal}</div>
            <div class="meal-items">${day[meal]}</div>
          </div>
        `;
      }
    });

    card.innerHTML = `
      <div class="menu-header">
        <span>${day.Day}</span>
        ${isToday ? '<span class="tag today-tag">TODAY</span>' : ''}
      </div>
      ${sections}
    `;

    container.appendChild(card);
  }
});