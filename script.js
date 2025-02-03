function updateTime() {
  const timeElement = document.querySelector(".utc-time");

  // Create a new Date object for the user’s local time
  const now = new Date();

  // Format it as YYYY-MM-DD HH:MM:SS
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Create the formatted date/time string
  const localTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // Display the local time in your target element
  timeElement.textContent = localTime;
}

// Update the time every second (1000 ms)
setInterval(updateTime, 1000);

// Show local time immediately on page load
updateTime();
