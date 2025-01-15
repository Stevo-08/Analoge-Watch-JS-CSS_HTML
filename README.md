# Analog Clock Project

## Description
This project demonstrates a fully functional analog clock built using **HTML**, **CSS**, and **JavaScript**. The clock accurately displays the current time with dynamic, real-time updates of its hour, minute, and second hands.

### Key Features
- **Real-Time Updates**: The clock synchronizes with the system time and updates every second.
- **Dynamic Movement**: The second, minute, and hour hands move smoothly to reflect the current time, with transitions that enhance the visual experience.
- **Responsive Design**: The clock adjusts gracefully on smaller screens, ensuring it remains usable and visually appealing on a variety of devices.
- **Radial Design**: The clock face includes radial gradient styling and hour markers, giving it a modern, polished appearance.
- **Efficient Animation**: Rotation of the hands is handled using CSS transformations, minimizing performance overhead.

### CSS
- The **clock background** has been updated with a new radial gradient from a light blue to dark gray, providing a more modern and visually appealing look.
- **Clock hands** now have smoother transitions with the addition of `transition` properties, ensuring fluid movement.
- **Center dot** now has a more prominent size for a cleaner and more realistic pivot point.
- **Responsive behavior** for small screens has been enhanced, adjusting the clock's size and font to fit better on mobile devices.

### Breakdown of Functionality
1. **HTML Structure**:
   - The clock face is defined with a central `.clock` container.
   - The clock hands (`hour-hand`, `min-hand`, and `second-hand`) are represented as child elements for easier styling and transformation.

2. **CSS Styling**:
   - The clock is styled with a radial gradient for the background and a border to resemble a traditional clock.
   - Hands are styled individually with different widths and lengths for clear differentiation.
   - A center point (`::after`) ensures a clean and realistic pivot for the hands.
   - Responsive rules (`@media`) ensure compatibility across devices.

3. **JavaScript Logic**:
   - A function `updateClock()` calculates the correct rotation angles for each hand based on the current time:
     - **Hour Hand**: Rotates based on hours and fractions of minutes.
     - **Minute Hand**: Rotates based on minutes and fractions of seconds.
     - **Second Hand**: Rotates in real-time, moving every second.
   - The hands' rotation is applied dynamically using `transform` properties in CSS.
   - `setInterval()` ensures that `updateClock()` runs every second, keeping the display accurate.

## Technologies Used
- **HTML**: Provides the structural layout of the clock.
- **CSS**: Handles the visual styling and animations.
- **JavaScript**: Powers the dynamic time calculations and real-time updates.

## How to Use
1. Clone or download the repository from GitHub.
2. Open the `index.html` file in any modern web browser.
3. The analog clock will display the current time and update in real-time.

## GitHub Repository
[Visit the GitHub repository](https://github.com/Stevo-08/Analoge-Watch-JS-CSS_HTML)

## License
This project is licensed under the MIT License.
