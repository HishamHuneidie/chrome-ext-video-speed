// Info:
//     document = DOM de la web
//     chrome = SI definido

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "speed-up") {
        speedUp(message.speed);
    }
});

let intervals = {};
let command = "";
document.addEventListener("keypress", e => {
    if ( e.shiftKey ) {
        if ( !intervals.command ) {
            intervals.command = setTimeout(() => {
                execCommand();
            }, 1000);
        }
        switch (e.code) {
            case 'Digit0':
            case 'Digit1':
            case 'Digit2':
            case 'Digit5':
            case 'Digit8':
                command += e.code.substring(5);
                break;
        }
    }
});

function execCommand() {
    switch (command) {
        case "5":
            speedUp("0.50");
            break;
        case "1":
            speedUp("1.00");
            break;
        case "12":
            speedUp("1.25");
            break;
        case "15":
            speedUp("1.50");
            break;
        case "18":
            speedUp("1.75");
            break;
        case "2":
            speedUp("2.00");
            break;
        case "22":
            speedUp("2.25");
            break;
        case "25":
            speedUp("2.50");
            break;
    }
    clearTimeout(intervals.command);
    delete intervals.command;
    command = "";
}


function speedUp(speed) {
    const videos = document.getElementsByTagName("video");
    for (const video of videos) {
        video.playbackRate = Number(speed);
    }
}