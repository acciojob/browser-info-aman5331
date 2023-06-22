//your JS code here. If required.
const browserName = navigator.appName;
    const version = navigator.appVersion;

    // Create the message
    const message = "You are using " + browserName + " version " + version;

    // Update the browser-info div with the message
    const browserInfoElement = document.getElementById('browser-info');
    browserInfoElement.textContent = message;
