document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".star-wars-header");
    let lastScrollY = window.scrollY;
    let inactivityTimer;

    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            header.classList.remove("visible"); // Auto-hide the header after 30 seconds
        }, 30000); // 30 seconds
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY < lastScrollY || window.scrollY === 0) {
            // Show the header when scrolling up or at the top of the page
            header.classList.add("visible");
        } else {
            // Hide the header when scrolling down
            header.classList.remove("visible");
        }
        lastScrollY = window.scrollY;
        resetInactivityTimer(); // Reset inactivity timer on scroll
    });

    document.addEventListener("mousemove", (e) => {
        if (e.clientY < 50) {
            header.classList.add("visible"); // Show the header when the mouse is near the top
        }
        resetInactivityTimer(); // Reset inactivity timer on mouse movement
    });

    resetInactivityTimer(); // Start the inactivity timer on page load
});
