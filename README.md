# Hand-Controlled Dino Game – Chrome Extension

This Chrome Extension lets you play the classic Dino game using **hand gestures** through your webcam using **MediaPipe Hands** (running fully offline).  
No internet required. No data collected. Everything runs locally inside the extension.

---

## 🚀 Features

- **Click extension icon** → Opens a fully offline Dino game.
- **Pinch gesture** → Jump  
- **Fist gesture** → Duck  
- **Both hands** Game restarts (optional)
- Uses **local MediaPipe WASM**, no network calls.
- Fully compliant with **Manifest V3** and Chrome Extension CSP rules.

---

## 🧠 How It Works

The extension loads:
- A local version of the **Chrome Dino game**
- Local **MediaPipe Hands** JS + WASM modules
- A gesture engine that maps:
  - Pinch → Jump  
  - Fist → Duck  
  - Optional: two Palms gestures for restart

All webcam input stays on your device. No cloud processing, no analytics, no storage.

---

## 📦 Project Structure

root/
│
├── manifest.json
├── package.json
├── tsconfig.json
├── src
│ ├── background.js
│ ├── content.js
├── icons/
│ └── dino16.png
│
├── dino/
│ ├── assets
│ │ ├── pinch.png
│ │ ├── ... more assets
│ ├── index.html
│ ├── index.js
│ ├── loader.js
│ ├── index.css
│ ├── mediapipe/
│ │ ├── hands.js
│ │ ├── camera_utils.js
│ │ ├── drawing_utils.js
│ │ ├── hands_solution_packed_assets.data
│ │ ├── hands_solution_packed_assets.wasm
│ │ └── hands_solution_packed_assets.loader.js
│ │ └── ... more files
│ └── mediapipe.js
│
└── README.md

---

## 🛠 Build & Load

No build steps required.  
Just:

1. Visit: `chrome://extensions`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select your extension folder

---

## 🔒 Privacy

This extension:
- Does **not** collect or transmit any data  
- Does **not** store video frames  
- Does **not** use remote servers  
- Uses camera stream **only locally** for gesture detection

A simple privacy policy is recommended for Chrome Web Store:

> “Camera access is used only locally to detect hand gestures.  
> No data is collected, stored, or transmitted.”

---

## 📜 Attributions

This project uses:

### **Chrome Dino Game Assets**
Dino game assets are part of the **Chromium Project**, licensed under the **BSD License**.  
Source: https://github.com/chromium/chromium

### **Dino Runner**
Dino runner game source code.
Source: https://github.com/wayou/t-rex-runner

### **MediaPipe Hands**
MediaPipe is released under the **Apache License 2.0**.  
Source: https://github.com/google/mediapipe

All licenses allow redistribution inside this extension.

---

## 📄 License

This project is licensed under the MIT License.  
See `LICENSE` file for full text.

---

## 🎮 Future Improvements

- Two-hand gestures (pause, restart)
- Sensitivity sliders
- Custom Dino themes
- Game difficulty modifiers
- Gesture visualization overlay

---

## 🤝 Contributions

PRs and forks welcome.  
If you improve gesture accuracy or add new gestures, feel free to contribute.

---

## ❤️ A Note From the Developer

This extension is built as a fun experiment combining:
- MediaPipe's powerful on-device ML
- Chrome Dino nostalgia  
- Gesture-based interaction

Enjoy playing Dino with your hands!
