const path = require('path');
const filePath = '/users/joe/notes.txt'

path.dirname(filePath) // /users/joe
path.basename(filePath) // notes.txt
path.extname(filePath) // .txt
//You can get the file name without the extension by specifying a second argument to basename:
path.basename(filePath, path.extname(filePath)) //notes

//You can join two or more parts of a path by using path.join():
const name = 'joe'
path.join('/', 'users', name, 'notes.txt') //'/users/joe/notes.txt'

//You can get the absolute path calculation of a relative path using path.resolve():

path.resolve('joe.txt') //'/Users/joe/joe.txt' if run from my home folder
//In this case Node.js will simply append /joe.txt to the current working directory.
//If you specify a second parameter folder, resolve will use the first as a base for the second:
path.resolve('tmp', 'joe.txt') //'/Users/joe/tmp/joe.txt' if run from my home folder

//If the first parameter starts with a slash, that means it's an absolute path:
path.resolve('/etc', 'joe.txt') //'/etc/joe.txt'

//path.normalize() is another useful function, that will try and calculate the actual path,
//when it contains relative specifiers like . or .., or double slashes:
path.normalize('/users/joe/..//test.txt') //'/users/test.txt'



// NB!!! Neither resolve nor normalize will check if the path exists.
// They just calculate a path based on the information they got.

// path.parse()
// Parses a path to an object with the segments that compose it:
//
//     root: the root
// dir: the folder path starting from the root
// base: the file name + extension
// name: the file name
// ext: the file extension
// Example:

    require('path').parse('/users/test.txt')
// results in
//
// {
//     root: '/',
//     dir: '/users',
//     base: 'test.txt',
//     ext: '.txt',
//     name: 'test'
// }
