const http = require("http");
const server = http.createServer(function (request, response) {
    if (request.url === "/") {
        response.write ("Hello world");
        response.end();
    }
    else if (request.url === "/courses") {
        response.write(JSON.stringify([1, 2, 10, 40, 50]));
        response.end();
    }
});
server.listen(3000);



server.addListener("connection", (socket) => {
    console.log("New connection established on port 3000...");
    })

console.log("server is listening to port 3000");