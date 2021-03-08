const fs = require('fs')
const path = require('path')
const folderPath = '/Users/joe'

fs.readdirSync(folderPath)
//You can get the full path:
fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
});

// filter the results to only return the files, and exclude the folders:
const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}

fs.readdirSync(folderPath)
    .map(fileName => {
        return path.join(folderPath, fileName)
    })
    .filter(isFile);


//Use fs.rename() or fs.renameSync() to rename folder.
//The first parameter is the current path, the second the new path:
fs.rename('/Users/joe', '/Users/roger', err => {
    if (err) {
        console.error(err);
        return;
    }
    //done
})
//fs.renameSync() is the synchronous version:
try {
    fs.renameSync('/Users/joe', '/Users/roger')
} catch (err) {
    console.error(err)
}

// Use fs.rmdir() or fs.rmdirSync() to remove a folder.
// Removing a folder that has content can be more complicated than you need.
// In this case it's best to install the fs-extra module, which is very popular and well maintained. It's a drop-in replacement of the fs module, which provides more features on top of it.
// In this case the remove() method is what you want.
// Install it using
//
// npm install fs-extra
// and use it like this:

const fs = require('fs-extra')
const folder = '/Users/joe'

fs.remove(folder, err => {
    console.error(err)
})
// It can also be used with promises:

fs.remove(folder)
    .then(() => {
        //done
    })
    .catch(err => {
        console.error(err)
    })
// or with async/await:

async function removeFolder(folder) {
    try {
        await fs.remove(folder)
        //done
    } catch (err) {
        console.error(err)
    }
}
const folder = '/Users/joe'
removeFolder(folder)
