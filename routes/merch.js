
const express = require('express');
const router = express.Router();


const Merch = require('../models/Merch');

router.get('/', async (req, res) => {

})

router.post('/', async (req, res) => {

    const newMerch = new Merch({

        id: 1,
        title: "Classic Varsity Top",
        img: "Img/casual-fashion-woman_925x.jpg",
        price: 60,
        size: "One Size",
        productDetails:
            "Womens casual varsity top. This grey & black buttoned top is a sport-inspired piece complete with an embroidered letter.",
        inCart: false,
        count: 0,
        total: 0
    })

    try {
        const newMerchAdded = await newMerch.save();
        res.json(newMerchAdded);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error, Possibly a duplicate piece of merchandise');
    }
})

module.exports = router;