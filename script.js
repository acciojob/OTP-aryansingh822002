//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Set initial focus to the first input
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // Clear the current value to ensure only one digit is present
            codes[idx].value = ''; 
            // Move to next field after a tiny delay to allow value to be set
            setTimeout(() => codes[idx + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
            // Move to previous field on backspace
            setTimeout(() => codes[idx - 1]?.focus(), 10);
        }
    });
});