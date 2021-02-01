
const EventListener = require("events");

class Logger extends EventListener{
    logMessage(message) {
        console.log(message);
        this.emit("logger", "response from logger.js");
    }
}

module.exports = Logger;