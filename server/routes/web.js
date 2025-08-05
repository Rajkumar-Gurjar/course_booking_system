const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/ContactController');

router.get('/contact', ContactController.display);

// router.get('/',(req,res)=>{
//     res.send("hello /")
// })

// router.get('/about',(req,res)=>{
//     res.send("hello about")
// })

module.exports = router;
 