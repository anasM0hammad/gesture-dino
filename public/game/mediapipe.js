

function startHandTracking(onGesture) {

  // Create hidden video source
  const video = document.createElement("video");
  video.style.position = "absolute";
  video.style.top = "70vh";
  video.style.left = "40px";
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
    width: 320,
    height: 240
  });

  camera.start();
}

window.startHandTracking = startHandTracking;