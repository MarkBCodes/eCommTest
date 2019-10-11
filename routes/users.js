const express = require('express');
const router = express.Router();


const User = require('../models/User');

router.get('/', async (req, res) => {
    
})

router.post('/', async (req, res) => {
    console.log('post');
    const newUser = new User({
        name: 'Sarah',
        email: 'sarah@test.com',
        password: '123456'
        
    })

    try {
        const newUserSaved = await newUser.save();
        res.json(newUserSaved);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error, Possibly a duplicate User');
    }
})  

module.exports = router;