const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('view engine', 'pug');

const ServiceTime = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const hourOfDay = date.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
        next();
    } else {
        res.send('<h1>Sorry, we are always open by (Monday to Friday, from 9 to 17).</h1>');
    }
};

app.use(ServiceTime);

app.get('/', (req, res) => {
    res.render('home', { title: 'Home', message: 'This is the home page' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services', message: 'This is the Our Services page' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact us', message: 'This is the Contact us page' });
});

const port = 5000;

app.listen(port, () => {
    console.log('Server started on port 5000');
});