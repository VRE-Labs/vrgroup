document.addEventListener("DOMContentLoaded", () => {
    // Initialize progress
    let progress = 0;
    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector("#progress-text");

    // Update progress bar
    function updateProgress(increment) {
        progress = Math.min(progress + increment, 100);
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Progress: ${progress}%`;
    }

    // Add learning points
    const learningPoints = document.querySelectorAll(".styled-list li");
    learningPoints.forEach((point, index) => {
        point.addEventListener("click", () => {
            if (!point.classList.contains("completed")) {
                point.classList.add("completed");
                point.style.textDecoration = "line-through";
                updateProgress(5); // Increment progress by 5% per point
            }
        });
    });

    // Multiple-choice questions
    const questions = [
        {
            question: "What is the key to building community trust?",
            options: ["Consistency", "Silence", "Perfection"],
            answer: "Consistency"
        },
        {
            question: "What should you do if something goes wrong?",
            options: ["Ignore it", "Acknowledge it", "Blame others"],
            answer: "Acknowledge it"
        }
    ];

    const quizContainer = document.createElement("div");
    quizContainer.classList.add("quiz-container");
    document.body.appendChild(quizContainer);

    questions.forEach((q, idx) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `<p>${idx + 1}. ${q.question}</p>`;
        q.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => {
                if (option === q.answer) {
                    button.style.backgroundColor = "green";
                    updateProgress(10); // Increment progress by 10% per correct answer
                } else {
                    button.style.backgroundColor = "red";
                }
                button.disabled = true;
            });
            questionDiv.appendChild(button);
        });
        quizContainer.appendChild(questionDiv);
    });

    // Completion message
    const completionMessage = document.createElement("div");
    completionMessage.id = "completion-message";
    completionMessage.style.display = "none";
    completionMessage.innerHTML = `<h2>🎉 Module Complete!</h2><p>Great job! You've completed the Leadership Refresher Module.</p>`;
    document.body.appendChild(completionMessage);

    // Check for module completion
    const checkCompletion = setInterval(() => {
        if (progress === 100) {
            completionMessage.style.display = "block";
            clearInterval(checkCompletion);
        }
    }, 500);
});
