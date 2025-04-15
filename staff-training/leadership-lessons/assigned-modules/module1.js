document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".module-section");
    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector("#progress-text");
    const completionMessage = document.querySelector("#completion-message");
    let progress = 0;
    let currentSectionIndex = 0;

    // Update progress bar
    function updateProgress(increment) {
        progress = Math.min(progress + increment, 100);
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Progress: ${progress}%`;
    }

    // Show the next section
    function showNextSection() {
        if (currentSectionIndex < sections.length - 1) {
            sections[currentSectionIndex].style.display = "none";
            currentSectionIndex++;
            sections[currentSectionIndex].style.display = "block";
        } else {
            sections[currentSectionIndex].style.display = "none";
            completionMessage.style.display = "block";
        }
    }

    // Handle answer button clicks
    document.querySelectorAll(".answer-button").forEach(button => {
        button.addEventListener("click", () => {
            if (button.dataset.correct === "true") {
                updateProgress(25); // Increment progress by 25% per correct section
                showNextSection();
            } else {
                alert("Incorrect answer. Try again.");
            }
        });
    });

    // Initialize the first section
    sections[currentSectionIndex].style.display = "block";
});
