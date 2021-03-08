const mysql = require("mysql");
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "admin",
    database: "nodeMysql"
});

connection.connect( (err) => {
    if (err) throw err;
    else console.log("Connected to DB");
} );

app.get("/createDB", (req, resp) => {
    let sql = "create database nodeMysql";
    connection.query(sql, (err, result) =>  {
        if (err) throw err;
        else resp.send("Database created");
        console.log(result);
    });
});

app.post("/createTable", (req, resp) => {
    let sql = "create table `posts` (`id` int auto_increment, `title` varchar(255), `body` varchar(255), primary key (`id`))";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        else resp.send("Table created");
        console.log(result);
    });
});

app.post("/createPost", (req, resp) => {
    let title = "Post num 1";
    let body = `This is post: ${title}`;
    let post = {title, body };
    let sql = `insert into posts (title, body) values ("${post.title}", "${post.body}")`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        else resp.send("Post added");
        console.log(result);
    });
});

app.post("/createPostAlt", (req, resp) => {
    let title = "Post num 1";
    let body = `This is post: ${title}`;
    let post = {title, body };
    let sql = `insert into posts set ?`;
    let query = connection.query(sql, post, (err, result) => {
        if (err) throw err;
        else resp.send("Post added");
        console.log(result);
    })
});

app.post("/getAllPosts", (req, resp) => {
    let sql = `select * from posts`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        else resp.send(result);
        console.log(result);
    })
});

app.get("/getSinglePost/:id", (req, resp) => {
    let sql = `select * from posts where id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        else resp.send(result);
        console.log(result);
    })
});

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// connection.end();
