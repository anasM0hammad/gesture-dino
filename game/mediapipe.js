

function startHandTracking(onGesture) {

  // Create hidden video source
  const video = document.createElement("video");
  video.style.display = "none";
  document.body.appendChild(video);

  const Hands = window.Hands;

  // Initialize Mediapipe Hands
  const hands = new Hands({
    locateFile: (file) =>
      chrome.runtime.getURL(`game/mediapipe/${file}`)
  });

  hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.6,
    minTrackingConfidence: 0.5
  });

  hands.onResults((results) => {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      const landmarks = results.multiHandLandmarks;
      onGesture(landmarks);
    }
  });

  const Camera = window.Camera;
  const drawConnectors = window.drawConnectors;
  const drawLandmarks = window.drawLandmarks;

  // Camera feed for Mediapipe
  const camera = new Camera(video, {
    onFrame: async () => {
      await hands.send({ image: video });
    },
    width: 640,
    height: 480
  });

  camera.start();
}

window.startHandTracking = startHandTracking;