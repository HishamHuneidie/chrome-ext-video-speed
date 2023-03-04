window.addEventListener('load', e => {

    function sendMessageToContentScript(message) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, message);
        });
    }

    let select = document.querySelector("#speed-up");
    select.addEventListener("change", () => {
        sendMessageToContentScript({ action: "speed-up", speed: select.value });
    });
});