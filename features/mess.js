const menuData = [
  {
    Day: "Monday",
    Breakfast: "Aloo Paratha + Green Chutney + Tomato Sauce + Curd",
    Lunch: "Cabbage Aloo Matar + Rajma + Plain Rice + Fryums + Roti + Roofaaza",
    Snacks: "Samosa + Chutney + Tea",
    Dinner: "Paneer Tikka Masala + Butter Chicken + Dal Fry + Plain Rice + Roti",
    Dessert: "Custard"
  },
  {
    Day: "Tuesday",
    Breakfast: "Poha + Jalebi // Poori + Aloo Curry + Egg Bhurji",
    Lunch: "Seasonal Sabji + Pyaz Ke Pakorde + Chana Dal + Jeera Rice + Papad + Roti + Curd",
    Snacks: "Peri Peri French Fries + Coffee",
    Dinner: "Dum Aloo + Daal Tadka + Fried Rice + Roti",
    Dessert: "Gulab Jamun"
  },
  {
    Day: "Wednesday",
    Breakfast: "Pav Bhaji with Onion + Sprouts Chaat",
    Lunch: "Kadhi + Mix Dal + Plain Rice + Aloo Bhujiya + Fryums + Roti + Bhuni Mirch + Banarsi Lassi",
    Snacks: "Pyaaz Ki Kachori + Tea",
    Dinner: "Paneer Lababdar + (3 time Kolhapuri Chicken / 2 time Chilly Chicken) + Jeera Rice + Roti + Dal",
    Dessert: ""
  },
  {
    Day: "Thursday",
    Breakfast: "Mix Veg Paratha + Red and Green Chutney",
    Lunch: "Chole + Methi Matar Malai + Papad + Plain Rice + Roti + Shikanji",
    Snacks: "Maggi + Coffee",
    Dinner: "Dry Manchurian + Aloo Soyabean + Dal Tadka + Roti + Fried Rice",
    Dessert: "Rabdi Jalebi"
  },
  {
    Day: "Friday",
    Breakfast: "Vada + (Uttapam / Masala Idli) + Sambar & Chutney",
    Lunch: "Mix Veg + Masoor Dal + Plain Rice + Roti + Curd",
    Snacks: "Bread Pakoda + Tea",
    Dinner: "Butter Paneer Masala + Dal + {Hyderabadi Chicken / Kadhai Chicken} + Plain Rice + Roti",
    Dessert: "Ras Malai"
  },
  {
    Day: "Saturday",
    Breakfast: "Sandwich + Green Chutney + Ketchup + Sprout Chaat",
    Lunch: "Lauki Chana + Lehsun Ki Chutney + Rajma + Plain Rice + Roti + Papad + Butter Milk",
    Snacks: "Golgappe + Coffee",
    Dinner: "Malai Kofta + Egg Curry + Plain Rice + Roti + Dal",
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
    Breakfast: "Milk with Coco Powder + Bread + Butter + Jam + Tea + Corn Flakes + Egg + (3 times Banana / 2 time Papaya / 2 time Watermelon)",
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