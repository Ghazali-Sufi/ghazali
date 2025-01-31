function updateTime() {
  const utc_time = document.querySelector(".utc-time");

//   utc_time.textContent = new Date().toISOString();

 // Get current UTC time, format it and display it
  utc_time.textContent = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
}

 // Update the time every second (1000 milliseconds)
    setInterval(updateTime, 1000);

    // Initial call to display time immediately when the page loads
    updateTime();