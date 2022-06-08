require('dotenv').config();
const express = require('express');
// const router = express.Router();
const app = express();
const path = require('path');


//setting up the view engine
app.engine('pug', require('pug').__express)
app.set('view engine','pug')
app.set('views', path.join(__dirname,'views'))

// setting directory for static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index',(req,res)=>{
    res.render('index');
});

const PORT = process.env.PORT || 5000;
app.listen(4000, ()=> {
    console.log(`our server is running on port ${PORT}`);
})

module.exports = app;