// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();
    
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    
   
    const currentUTCTime = currentDate.getTime();
    
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDay}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime}`;
});
