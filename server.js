const express = require('express');
const hbs = require('hbs');
//const ejs = require('ejs');
var app = express();

//VIEW-ENGINE
app.set('view-engine', 'hbs');

//MIDDLEWARE
app.use(express.static('./public'));

//ROUTING
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: (new Date()).getFullYear()
    });
});

//LISTEN
app.listen(3000, () => console.log('running at port 3000'));