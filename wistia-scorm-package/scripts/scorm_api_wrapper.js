// Simplified SCORM API wrapper
function getAPI() {
    var API = null;

    if ((window.parent) && (window.parent != window)) {
        API = findAPI(window.parent);
    }
    if ((API == null) && (window.top.opener)) {
        API = findAPI(window.top.opener);
    }
    if (API == null) {
        console.error("Unable to find SCORM API adapter");
    }
    return API;
}

function findAPI(win) {
    var findAPITries = 0;
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        findAPITries++;
        if (findAPITries > 500) {
            console.error("Error finding API -- too deeply nested.");
            return null;
        }
        win = win.parent;
    }
    return win.API;
}