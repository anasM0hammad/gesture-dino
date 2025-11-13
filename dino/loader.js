document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 32) {
        var box = document.getElementById("messageBox");
        box.style.visibility="hidden";
    }
};

async function initializeMediaPipe() {
    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );
    // Now you can use 'vision' to create tasks like ImageClassifier, HandLandmarker, etc.
    console.log("MediaPipe Vision tasks loaded successfully!");
}
initializeMediaPipe();