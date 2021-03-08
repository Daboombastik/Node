const paypal = require ("paypal-rest-sdk");
// const paypal = require('@paypal/checkout-server-sdk');
const ejs = require ("ejs");
const paypal_order = require ("./payment_json");
const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.listen(PORT, () => console.log("Server started"));

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'Aa_V-07YGDElYG4Id_X1ox1c9ulW7K7XxEHXjeLWYoWTM7dFwgbjn7amLOYF14ZtHfsxRtLxXTI6qxEt',
    'client_secret': 'EKbM8iGbDEHos8p1l1yVVZvkLtVilG-kpt3bcZsTeylfqTUfxG2FcKcQ3bnJz-7DS6VgvmSNTJNd91-h'
});

app.get ("/", (req, resp) => {
    resp.render("index");
});

app.post('/pay', (req, resp) => {

    paypal.payment.create(paypal_order, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                    resp.redirect(payment.links[i].href);
                }
            }
        }
    });
});

app.get("/success", (req, resp) => {
    const payerID = req.query.PayerID;
    const paymentID = req.query.paymentId;
    const execute_payment_json = {
        "payer_id": payerID,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "5.00"
            }
        }]
    };
    paypal.payment.execute(paymentID, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            resp.send('Success');
        }
    }, () => {});
});
app.get('/cancel', (req, res) => res.send('Cancelled'));





