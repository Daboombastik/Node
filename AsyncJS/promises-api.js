// -- testing promises -- //

const promise_resolved = Promise.resolve({id:1, name: "Object"});
promise_resolved.then(result => console.log(result));
//
// const promise_rejected = Promise.reject(new Error("promise rejected"));
// promise_rejected.catch(error => console.log(error));

const promise1 = new Promise( (resolve, reject) => {
    resolve({name: "this Promise 1"});
    }
);

const promise2 = new Promise( (resolve, reject) => {
    resolve( {name: "this Promise 2"});
    }
);

Promise.all([promise1, promise2]).then( (result) =>
    console.log("All done"));

Promise.race([promise1, promise2])
    .then(result => console.log(`Only the first one: ${result.name}`))
    .catch(err => console.log(err.message));