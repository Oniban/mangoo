// Bus schedule data - All 5 buses (137 trips)
const buses = [
  {
    "bus": "Bus 04",
    "time": "07:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "07:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "08:05",
    "from": "D Quarters",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 04",
    "time": "08:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "08:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "08:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "08:35",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 02",
    "time": "08:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "08:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "08:48",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "08:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "08:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "08:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "08:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "09:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "09:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "09:06",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "09:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "09:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "09:20",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "09:20",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 02",
    "time": "09:25",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "09:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "09:35",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "09:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "09:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "09:45",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "09:48",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "09:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "09:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "09:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "10:00",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "10:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "10:06",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "10:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "10:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "10:20",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 03",
    "time": "10:20",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "10:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "10:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "10:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "10:45",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "10:48",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "10:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "10:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "10:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "11:00",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "11:06",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "11:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "11:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "11:15",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "11:20",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 04",
    "time": "11:25",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "11:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "11:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "11:35",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "11:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "11:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "11:45",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "11:48",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "11:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "11:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "11:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "12:00",
    "from": "Tut Block",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 03",
    "time": "12:00",
    "from": "Tut Block",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 02",
    "time": "12:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "12:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "12:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "12:20",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 02",
    "time": "12:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "12:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "12:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "12:48",
    "from": "Tut Block",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 02",
    "time": "12:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "12:55",
    "from": "Tut Block",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 04",
    "time": "12:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "13:00",
    "from": "Tut Block",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 03",
    "time": "13:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "13:05",
    "from": "Tut Block",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 01",
    "time": "13:10",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 02",
    "time": "13:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "13:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "13:47",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "13:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "13:53",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "13:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "13:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "14:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "14:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "14:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "14:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "14:15",
    "from": "IIT Patna (Aryabhatta)",
    "to": "Bihar Museum "
  },
  {
    "bus": "Bus 02",
    "time": "14:25",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 04",
    "time": "14:25",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "14:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "14:35",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "14:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "14:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "14:48",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "14:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "14:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "14:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "15:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "15:06",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "15:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "15:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "15:20",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 02",
    "time": "15:25",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "15:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "15:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "15:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Institute Bus",
    "time": "15:48",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "15:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "15:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "15:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "16:00",
    "from": "Bihar Museum",
    "to": "IIT Patna (Aryabhatta)"
  },
  {
    "bus": "Institute Bus",
    "time": "16:05",
    "from": "Tut Block",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 02",
    "time": "16:10",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 02",
    "time": "16:30",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "16:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "16:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "16:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "16:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "17:10",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "17:20",
    "from": "Aryabhatta",
    "to": "D Quarters"
  },
  {
    "bus": "Bus 02",
    "time": "17:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "17:40",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "17:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "17:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "17:55",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "18:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 02",
    "time": "18:15",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 04",
    "time": "18:20",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "18:50",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 03",
    "time": "19:05",
    "from": "Aryabhatta",
    "to": "Tut Block"
  },
  {
    "bus": "Bus 01",
    "time": "20:00",
    "from": "D Quarters",
    "to": "Aryabhatta"
  },
  {
    "bus": "Bus 01",
    "time": "20:35",
    "from": "Aryabhatta",
    "to": "D Quarters"
  }
];

// Convert "HH:MM" to minutes since midnight
function toMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

// Format time to 12-hour format
function formatTime12h(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("busContainer");

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Filter buses from current time onwards
  const availableBuses = buses
    .filter(b => toMinutes(b.time) >= currentMinutes)
    .sort((a, b) => toMinutes(a.time) - toMinutes(b.time));

  if (availableBuses.length === 0) {
    container.innerHTML = "<p style='text-align: center; padding: 40px; font-size: 18px;'>No more buses available today 🚫</p>";
    return;
  }

  availableBuses.forEach((b, index) => {
    const card = document.createElement("div");
    card.className = "timetable-card";
    
    // Add special styling for the next bus
    if (index === 0) {
      card.classList.add("next-bus");
    }

    card.innerHTML = `
      <div class="timetable-header">
        <span class="day">${b.bus}</span>
        <span class="tag ${index === 0 ? 'next-tag' : ''}">${index === 0 ? 'NEXT BUS' : 'AVAILABLE'}</span>
      </div>

      <div class="row">
        <span class="time">${formatTime12h(b.time)}</span>
        <span class="code">${b.from} → ${b.to}</span>
        <span class="venue">Weekday</span>
      </div>
    `;

    container.appendChild(card);
  });
});
