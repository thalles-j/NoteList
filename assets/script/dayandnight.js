let isDarkMode = false;

function toggleDarkMode() {
    const body = document.body;
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}