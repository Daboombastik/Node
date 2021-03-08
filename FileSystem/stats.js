const fs = require('fs')
fs.stat('/Users/joe/test.txt', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }

    stats.isFile() //true
    stats.isDirectory() //false
    stats.isSymbolicLink() //false
    stats.size //1024000 //= 1MB
});

// syncStat
try {
    const stats = fs.statSync('/Users/joe/test.txt')
} catch (err) {
    console.error(err)
}
