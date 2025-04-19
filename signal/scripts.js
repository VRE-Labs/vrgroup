document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".star-wars-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY < lastScrollY || window.scrollY === 0) {
            // Show the header when scrolling up or at the top of the page
            header.classList.add("visible");
        } else {
            // Hide the header when scrolling down
            header.classList.remove("visible");
        }
        lastScrollY = window.scrollY;
    });

    // Show the header when the mouse is near the top of the screen
    document.addEventListener("mousemove", (e) => {
        if (e.clientY < 50) {
            header.classList.add("visible");
        }
    });
});
