const express = require('express');
const router = express.Router();

//accessing the index page
router.get('/',(req, res)=>{
// we are rendering the index pug file
    res.render('index')
});


//we exposing our route to any file that will require it.
module.exports = router