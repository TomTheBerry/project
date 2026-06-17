// Prevent inspect/developer tools
(function() {
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable keyboard shortcuts for dev tools
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Windows/Linux)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C (Inspect element)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+K (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'K') {
            e.preventDefault();
            return false;
        }
    });

    // Detect if devtools is open
    let devToolsOpen = false;
    const threshold = 160;

    setInterval(function() {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                document.body.innerHTML = '<h1 style="text-align:center;color:#ff0000;margin-top:50px;">🚫 Inspecting is not allowed</h1>';
            }
        } else {
            devToolsOpen = false;
        }
    }, 500);

    // Disable console methods
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
})();

// Smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.scrollBehavior = 'smooth';
});
