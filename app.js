const express = require('express');
const path = require('path');

const app = express();
const $views = path.join(__dirname, 'views/')
app.set('port', 3030);


app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    res.sendFile(`${$views}home.html`)
})
app.get('/babbage', (req, res) => {
    res.sendFile(`${$views}babbage.html`)
})
app.get('/berners-lee', (req, res) => {
    res.sendFile(`${$views}berners-lee.html`)
})
app.get('/clarke', (req, res) => {
    res.sendFile(`${$views}clarke.html`)
})
app.get('/hamilton', (req, res) => {
    res.sendFile(`${$views}hamilton.html`)
})
app.get('/hopper', (req, res) => {
    res.sendFile(`${$views}hopper.html`)
})
app.get('/lovelace', (req, res) => {
    res.sendFile(`${$views}lovelace.html`)
})
app.get('/turing', (req, res) => {
    res.sendFile(`${$views}turing.html`)
})

app.use(express.static('public'))


app.listen(app.get('port'), (req, res) => {
    console.log(`servidor levantado en http://localhost:${app.get('port')}`)
})

