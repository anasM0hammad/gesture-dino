chrome.runtime.onInstalled.addListener(() => {
    console.log('✅ Custom Dino Runner installed.');
});


chrome.action.onClicked.addListener(() => {
    const dinoURL = chrome.runtime.getURL('game/index.html');
    chrome.tabs.create({ url: dinoURL });
});
