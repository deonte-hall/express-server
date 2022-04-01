// import files and packages up here

const  express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const data = require('./data.json');
// create your express server below

let app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

// route handler

app.get('/', ( req, res) => {
    res.status(200).send('Loaded. Site is functional!')
});

  app.get('/data', (req, res) => {

     res.status(200).send(data);

  });

// listen for incoming connections

// finally export the express application

module.exports = app;
