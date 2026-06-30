const bubbles = document.querySelectorAll(".bubble");
const progress = document.getElementById("progress");
const counter = document.getElementById("counter");
const surprise = document.getElementById("surprise");

let total = 0;

/* Optional: Randomize bubble positions */
bubbles.forEach(bubble => {
    bubble.style.left = (10 + Math.random() * 80) + "%";
    bubble.style.top = (22 + Math.random() * 60) + "%";
});

/* Bubble click */
bubbles.forEach(bubble => {

    bubble.addEventListener("click", () => {

        // Prevent double-clicks
        if (bubble.classList.contains("clicked")) return;

        bubble.classList.add("clicked");

        total++;

        progress.style.width = `${total * 10}%`;
        counter.textContent = `${total} / 10 Hearts`;

        // Pop animation
        bubble.style.pointerEvents = "none";
        bubble.style.transition = "transform .25s, opacity .25s";
        bubble.style.transform = "translate(-50%, -50%) scale(0)";
        bubble.style.opacity = "0";

        setTimeout(() => {
            bubble.remove();
        }, 250);

        if (total === 10) {
            setTimeout(() => {
                surprise.style.display = "flex";
                createHearts();
            }, 400);
        }

    });

});

/* Heart animation */
function createHearts() {

    for (let i = 0; i < 120; i++) {

        const heart = document.createElement("div");

        heart.textContent = "❤";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-40px";

        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.color = "hotpink";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9998";

        const duration = 3 + Math.random() * 3;

        heart.style.animation = `fall ${duration}s linear forwards`;

        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);

    }

}

/* Falling animation */
const style = document.createElement("style");

style.textContent = `
@keyframes fall {

    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(120vh);
        opacity: 0;
    }

}
`;

document.head.appendChild(style);