  function updateClock() {
      const now = new Date();

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"];
      const dayName = weekdays[now.getDay()];
      const day = now.getDate();
      const monthNames = ["January","February","March","April",
        "May","June","July","August","September","October",
        "November","December"];
      const month = monthNames[now.getMonth()];

      document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
      document.getElementById("date").textContent = `${dayName}, ${day} ${month}`;
    }

    setInterval(updateClock, 1000);
    updateClock();