const Logger = require("./Logger/Logger.js")
const logger = new Logger();

logger.on("logger", (args) => {
    console.log (args);
});

logger.logMessage("Request from main app.js");