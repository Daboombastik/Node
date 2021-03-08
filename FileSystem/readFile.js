const fs = require ('fs');

fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
});
//Alternatively, you can use the synchronous version fs.readFileSync():
try {
    const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
