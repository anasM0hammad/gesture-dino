

function startHandTracking(onGesture) {

  // Create video source (will be moved to camera display by main.html)
  const video = document.createElement("video");
  const videoContainer = document.getElementById('camera-display');
  const videoPlaceholder = document.getElementById('video-placeholder');
  video.autoplay = true;
  video.playsInline = true;
  video.muted = true;
  video.id = "camera-video-stream";
  video.setAttribute("data-camera-stream", "true");
  // Initial positioning - will be overridden when moved to camera display
  video.width = '100%';
  video.height = '100%';
  videoPlaceholder.style.display = 'none';
  videoContainer.appendChild(video);
  
  // Dispatch custom event when video is created
  setTimeout(() => {
    const event = new CustomEvent('cameraVideoCreated', { detail: { video } });
    document.dispatchEvent(event);
  }, 100);

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