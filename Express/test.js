const express = require ("express");
const path = require("path");
const persons = require("./persons");
const logger = require("./middleware/anotherLogger");
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//create a middleware function

//init a middleware function
app.use(logger);

// static folder / server
app.use (express.static(path.join(__dirname, "views")));

// get list of persons as json
app.get ("/", (req,resp) => {
    resp.json(persons.filter(person => person.age > 30));
});

// show a concrete html file for this link
app.get ("/show", (req, resp) => {
    // resp.sendFile(path.join(__dirname, "views", "test.html"));
    // resp.sendFile(__dirname + "/views/test.html");
    resp.render(__dirname + "/views/test.html");
});

app.get ("/show/:id", (req, resp) => {
   resp.send(req.params.id);
});
