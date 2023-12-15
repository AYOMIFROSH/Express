const express = require(`express`)
const app = express()

app.set('view engine', 'pug');
app.set(`views`, `views`)

app.get('/', (req, res) => {
    res.render('home', { title: `home`});
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Our Services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});


const port = 5000

app.listen(port, () => {
    console.log('Server started on port 5000');
});