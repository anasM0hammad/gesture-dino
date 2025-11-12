window.addEventListener('offline', () => {
    console.log('🌐 Offline detected! Opening custom Dino game...');
    chrome.runtime.sendMessage({ type: 'OFFLINE_DETECTED' });
});