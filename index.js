const express = require('express');
const app = express();

// JSON enabled
const { json } = require('express');
app.use(json());

// Cors Enabled
const cors = require('cors');
app.use(cors());

// Data base Add--
require('./DB/Connection');

// API add
app.use('/APi', require('./APi/post'));

app.listen(9977, () => {
    console.log('chalu thay gayu....')
});