const screen = document.querySelector("body");

function enterFullscreen() {
    if (!document.fullscreenElement) {
        screen.requestFullscreen().catch((err) => {
            console.error(`Failed to enter full-screen mode: ${err.message}`);
        });
    }
}

function exitFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        enterFullscreen();
    } else if (event.key === "Escape") {
        exitFullscreen();
    }
});