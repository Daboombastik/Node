console.log("Before");
//
// // -- callback -- //
//
// getUser(1, function (user) {
//     getProducts(user, function (products) {
//         console.log(user);
//         console.log(products);
//     });
// });
//
// function getUser(id, callback) {
//     console.log("Trying to connect to Database");
//     console.log("Connected to DataBase and found the user");
//     callback({id, name: "user that I was looking for"});
// };
//
// function getProducts(user, callback) {
//     console.log("Trying to collect the products for this user");
//     console.log(user.id, user.name);
//     callback(["product1", "product2", "product3"]);
// };
// console.log("After");


// -- flattened callback -- //

getUser(1, displayUser);

function getUser(id, callback) {
    console.log("Trying to connect to Database");
    console.log("Connected to DataBase and found the user");
    callback({id, name: "user that I was looking for"});
};

function getProducts(user, callback) {
    console.log("Trying to collect the products for this user");
    console.log(user.id, user.name);
    callback(["product1", "product2", "product3"]);
};

function displayProducts(products) {
    console.log(products);
};

function displayUser(user) {
    console.log(user);
    getProducts(user, displayProducts);
}

console.log("After");

