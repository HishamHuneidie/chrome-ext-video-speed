chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "speed-up") {
        const videos = document.getElementsByTagName("video");
        for (const video of videos) {
            video.playbackRate = Number(message.speed);
        }
    }
});