const Logger = require("./Logger/Logger.js")
const logger = new Logger();

logger.on("logger", (args) => {
    console.log (args);
});

logger.logMessage("Request from main app.js");

function Circle (radius) {
    this.radius = radius;
    this.color = "yellow";
    this.draw_func = function (){
        console.log(radius);
    }
}
Circle.call(logger.logMessage("call from Circle object"));
const circle = new Circle(50);
// const circle = new Circle(10);
// console.log (circle);

const anotherCircle = Object.assign({}, new Circle(50));     // cloning with assign function
console.log(anotherCircle);
const anotherCircle1 = {...new Circle(50)};                        // cloning with spread operator
console.log(anotherCircle1);

for (let key in circle) {                                                // cloning with a for loop
    anotherCircle1[key] = circle[key];
}
console.log(anotherCircle1);

