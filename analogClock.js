/**
 * Function to update the clock hands based on the current time.
 * This function calculates the rotation angles for the hour, minute, and second hands.
 */
function updateClock() {
    const now = new Date(); // Get the current time
    const hours = now.getHours(); // Get the current hour
    const minutes = now.getMinutes(); // Get the current minute
    const seconds = now.getSeconds(); // Get the current second

    // Calculate the rotation for the hour hand (30 degrees per hour, plus a fraction for minutes)
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;

    // Calculate the rotation for the minute hand (6 degrees per minute, plus a fraction for seconds)
    const minuteDegrees = (minutes + seconds / 60) * 6;

    // Calculate the rotation for the second hand (6 degrees per second)
    const secondDegrees = seconds * 6;

    // Select the clock hands from the DOM
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    // Apply the calculated rotations to the clock hands using the CSS transform property
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`; // Rotate the hour hand
    minHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`; // Rotate the minute hand
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`; // Rotate the second hand
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to update the clock hands immediately
updateClock();
