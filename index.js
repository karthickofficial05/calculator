
document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');

    function appendTodisplay(value) {
        display.value += value;
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = 'Error';
        }
    }

    function clearDispaly() {
        display.value = '';
    }

    // Handle keyboard input
    
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            appendTodisplay(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape' || key === 'C' || key === 'c') {
            clearDispaly();
        }
    });

    window.appendTodisplay = appendTodisplay;
    window.calculate = calculate;
    window.clearDispaly = clearDispaly;
});
