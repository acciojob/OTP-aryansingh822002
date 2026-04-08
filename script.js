//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Automatically focus the first input on load
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            // Clear current value to ensure only one digit exists
            codes[idx].value = '';
            // Move to next field
            setTimeout(() => {
                if (idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            // Move to previous field on backspace
            setTimeout(() => {
                if (idx > 0) {
                    codes[idx - 1].focus();
                }
            }, 10);
        }
    });
});