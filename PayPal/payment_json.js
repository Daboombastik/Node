const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:5000/success",
        "cancel_url": "http://localhost:5000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Book",
                "sku": "001",
                "price": "5.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "5.00"
        },
        "description": "Hat for the best team ever"
    }]
};

module.exports = create_payment_json;
