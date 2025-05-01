const displayElement = document.getElementById('display');
const historyElement = document.getElementById('history');
const displayWrapper = document.getElementById('displayWrapper');

// Append value to the display
function appendValue(value) {
    displayElement.value += value;
    showDisplayBar();
}

// Clear the display
function clearDisplay() {
    displayElement.value = '';
    showDisplayBar();
}

// Delete the last character
function deleteLast() {
    displayElement.value = displayElement.value.slice(0, -1);
    showDisplayBar();
}

// Perform calculation and update history
function calculate() {
    try {
        const expression = displayElement.value;
        const result = eval(expression);

        // Append to history
        if (expression) {
            const historyEntry = document.createElement('div');
            historyEntry.textContent = `${expression} = ${result}`;
            historyEntry.classList.add('history-entry'); // Add the animation class
            historyElement.appendChild(historyEntry); // Add to the bottom of the history

            // Make the history bar visible with slide-in effect
            historyElement.classList.add('visible');

            // Scroll to the bottom
            historyElement.scrollTop = historyElement.scrollHeight;
        }

        // Update display with result
        displayElement.value = result;
        showDisplayBar();
    } catch (error) {
        displayElement.value = 'Error';
        showDisplayBar();
    }
}

// Show the display bar
function showDisplayBar() {
    displayWrapper.classList.add('visible');
}

// Add a temporary highlight class to clicked buttons
const buttons = document.querySelectorAll('form input[type="button"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked'); // Add a temporary class for highlight
        setTimeout(() => {
            button.classList.remove('clicked'); // Remove the highlight class after a delay
        }, 200); // Match the transition duration in CSS
    });
});