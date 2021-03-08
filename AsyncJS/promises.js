const promise = new Promise(function (resolve, reject) {
    //Async operation that demands time;
    resolve( {name: "object returned after operation"});
    reject(new Error("something went wrong"));
});

promise
    .then(function (result) {
        console.log("Here is the result of promise operation", result);
    })
    .catch(function (err) {
        console.log(err.message);
    });

// -- callbacks -> to promises -- //

console.log("Before");

getUser(1).then(user => {
    getProducts(user).then(products => {
        console.log(user);
        console.log(products);
    });
});

// -- OR a better way !!! -- //

getUser(1)
    .then(user => getProducts(user))
    .then(products => console.log(products))
    .catch(error => console.log(error));


function getUser(id) {
    console.log("Trying to connect to Database");
    console.log("Connected to DataBase and found the user");
    return new Promise(function (resolve, reject) {
        resolve({id, name: "user that I was looking for"});
    });
};

function getProducts(user) {
    console.log("Trying to collect the products for this user");
    console.log(user.id, user.name);
    return new Promise(function (resolve, reject) {
        resolve(["product1", "product2", "product3"]);
        reject(new Error("no products for the user with this id"));
    })
};

console.log("After");


// -- Promises -> to await-sync functions !!! -- //

display();
async function display() {
    try {
        const user = await getUser(2);
        const products = await getProducts(user);
        console.log(products);
    } catch (err) {
        console.log(err.message);
    }
}
