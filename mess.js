// Mess menu data
const menuData = [
  {
    "Day": "Monday",
    "Breakfast": "Aloo Paratha + Red & Green Chutney",
    "Lunch": "Phool Gobhi + Rajma + Plain Rice + Fryums + Roti",
    "Snacks": "Samosa + Chutney",
    "Dinner": "Butter Paneer Masala / Butter Chicken + Dal Fry + Plain Rice + Roti",
    "Dessert": "Custard / Sewai Kheer"
  },
  {
    "Day": "Tuesday",
    "Breakfast": "Palak Poori + Aloo Curry",
    "Lunch": "Mix Veg + Dal Tadka + Jeera Rice + Papad + Roti",
    "Snacks": "Bhel Puri",
    "Dinner": "Aloo Soya + Dal Makhani + Roti + Fried Rice",
    "Dessert": "Gulab Jamun"
  },
  {
    "Day": "Wednesday",
    "Breakfast": "Poha + Jalebi + Namkeen (Sev)",
    "Lunch": "Kadhi + Mix Dal + Plain Rice + Aloo Bhujia + Fryums + Roti",
    "Snacks": "Pasta",
    "Dinner": "Chilli Paneer / Chilli Chicken + Jeera Rice + Roti",
    "Dessert": ""
  },
  {
    "Day": "Thursday",
    "Breakfast": "Plain Poori + Dry Aloo Sabzi",
    "Lunch": "Dum Aloo + Dal Tadka + Fried Rice + Roti + Papad",
    "Snacks": "Spring Roll",
    "Dinner": "Mix Veg + Rajma + Plain Rice + Papad + Roti",
    "Dessert": "Gajar Halwa / Rasgulla"
  },
  {
    "Day": "Friday",
    "Breakfast": "Uttapam + Vada + Sambar & Chutney",
    "Lunch": "Chole + Methi Matar Malai + Fryums + Plain Rice + Roti",
    "Snacks": "Bread Pakoda",
    "Dinner": "Kadhai Paneer / Kadhai Chicken + Plain Rice + Roti",
    "Dessert": "Kheer"
  },
  {
    "Day": "Saturday",
    "Breakfast": "Sandwich + Green Chutney + Ketchup",
    "Lunch": "Noodles + Manchurian + Fried Rice + Dal",
    "Snacks": "Golgappe",
    "Dinner": "Malai Kofta + Egg Curry + Plain Rice + Roti",
    "Dessert": "Boondi"
  },
  {
    "Day": "Sunday",
    "Breakfast": "Masala Dosa + Sambar & Chutney",
    "Lunch": "Chole Bhature + Dal + Fry + Jeera Rice + Boondi Raita",
    "Snacks": "Maggi",
    "Dinner": "Chicken & Veg Biryani + Raita + Gravy",
    "Dessert": "Shahi Tukda"
  },
  {
    "Day": "Everyday",
    "Breakfast": "Bread + Butter + Jam + Ketchup + Tea + Milk + Coffee",
    "Lunch": "Salad + Pickle",
    "Snacks": "Tea / Coffee + Toast",
    "Dinner": "Salad + Pickle",
    "Dessert": ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menuContainer");
  
  // Get current day (1=Monday, 7=Sunday)
  const today = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[today];
  
  // Find today's menu and everyday menu
  let todayMenu = null;
  let everydayMenu = null;
  const otherDays = [];
  
  menuData.forEach(day => {
    if (day.Day === todayName) {
      todayMenu = day;
    } else if (day.Day === "Everyday") {
      everydayMenu = day;
    } else {
      otherDays.push(day);
    }
  });
  
  // Render today's menu first (highlighted)
  if (todayMenu) {
    renderDay(todayMenu, true, false);
  }
  
  // Render everyday menu
  if (everydayMenu) {
    renderDay(everydayMenu, false, true);
  }
  
  // Render other days in order
  const dayOrder = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  dayOrder.forEach(dayName => {
    if (dayName !== todayName) {
      const day = menuData.find(d => d.Day === dayName);
      if (day) {
        renderDay(day, false, false);
      }
    }
  });
  
  function renderDay(day, isToday, isEveryday) {
    const card = document.createElement("div");
    card.className = "menu-day";
    
    if (isToday) {
      card.classList.add("today");
    }
    if (isEveryday) {
      card.classList.add("everyday");
    }
    
    let tagHTML = '';
    if (isToday) {
      tagHTML = '<span class="tag today-tag">TODAY</span>';
    } else if (isEveryday) {
      tagHTML = '<span class="tag everyday-tag">EVERYDAY</span>';
    } else {
      tagHTML = '<span class="tag">WEEKDAY</span>';
    }
    
    let sectionsHTML = '';
    const meals = [
      { title: 'Breakfast', key: 'Breakfast' },
      { title: 'Lunch', key: 'Lunch' },
      { title: 'Snacks', key: 'Snacks' },
      { title: 'Dinner', key: 'Dinner' },
      { title: 'Dessert', key: 'Dessert' }
    ];
    
    meals.forEach(meal => {
      const items = day[meal.key];
      if (items && items !== '' && items !== 'nan') {
        sectionsHTML += `
          <div class="meal-section">
            <div class="meal-title">${meal.title}</div>
            <div class="meal-items">${items}</div>
          </div>
        `;
      }
    });
    
    card.innerHTML = `
      <div class="menu-header">
        <span class="day">${day.Day}</span>
        ${tagHTML}
      </div>
      ${sectionsHTML}
    `;
    
    container.appendChild(card);
    
    // Scroll today's menu into view
    if (isToday) {
      setTimeout(() => {
        card.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 300);
    }
  }
});
