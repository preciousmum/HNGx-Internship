document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();
    
    // Define an array of days of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Find the current day of the week
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    
    // Get the current UTC time in milliseconds
    let currentUTCTime = currentDate.getTime();
    
    
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    function updateUTCTime() {
        currentUTCTime += 1; // Increment by 1000 milliseconds (1 second)
        currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;
    }

    currentDayElement.textContent = `Current Day: ${currentDay}`;
    currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime}`;

    
    setInterval(updateUTCTime, 1);
});
