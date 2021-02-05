function doAuth(request, response, next) {
    console.log("Authentication...");
    next();
}

module.exports = doAuth;