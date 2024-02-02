const express = require('express');
const Ordersdata = require('../DB/models/OrderSchema');
const router = express.Router();

router.post('/postorders', async (req, res) => {
    let orderResponse = new Ordersdata({
        orderitems: req.body.orderitems,
        shippingAddress1: req.body.address1,
        shippingAddress2: req.body.address2,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        totalprice: req.body.totalprice,
        name: req.body.userName,
        email: req.body.email,
        phoneno: req.body.phoneno,
    });
    let response = await orderResponse.save();
    if (!response) {
        return res.status(500).json({ success: false, "description": "cannot insert orders plz try again" })
    }
    res.send({ success: true });

});

router.get('/', async (req, res) => {
    const myorders = await Ordersdata.find();
    if (!myorders || myorders == []) {
        return res.status(500).json({ success: false, "description": "cannot get the items!!!" })
    }
    console.log(myorders);
    res.send(myorders)
})

module.exports = router;