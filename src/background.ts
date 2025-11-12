chrome.runtime.onInstalled.addListener(() => {
    console.log('✅ Custom Dino Runner installed.');
});


// Detect offline mode and open the Dino game page
chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.type === 'OFFLINE_DETECTED') {
        const dinoUrl = chrome.runtime.getURL('dino/index.html');
        chrome.tabs.create({ url: dinoUrl });
    }
});

chrome.action.onClicked.addListener(() => {
    const dinoURL = chrome.runtime.getURL('dino/index.html');
    chrome.tabs.create({ url: dinoURL });
});
