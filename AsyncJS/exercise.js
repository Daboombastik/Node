sendToClient();

async function sendToClient() {
    const customer = await getCustomer(1);
    console.log('Customer: ', customer);
    if (customer.isGold) {
        const topMovies = await getTopMovies();
        console.log("Top movies", topMovies);
        await sendEmail(customer.email, topMovies);
        console.log('Email sent...');
    }
}

let customerTemp;
getCustomer(1)
    .then(customer => { if (customer.isGold) customerTemp = customer});

getTopMovies()
    .then(movies => {
        console.log("Top movies",movies);
        sendEmail(customerTemp.email, movies)
    })
    .then(message => console.log('Email sent...'));

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        resolve({
            id: 1,
            name: 'Mosh Hamedani',
            isGold: true,
            email: 'email'
        });
        reject(new Error("The customer was not found"));
    })
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        resolve({
            movies: ['movie1', 'movie2'],
        });
        reject(new Error("The movies were not found"))
    });
}

function sendEmail(email, movies) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            resolve();
            reject();
        });
    }, 4000);
}