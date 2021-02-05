const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // res.send('hello world');
    res.render('view', { title: "My Express App",
        message: "Hello, this is main page" });
});

module.exports = router;