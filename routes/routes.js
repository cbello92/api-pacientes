const express = require('express');
const app = express();

app.use('/v1/pacientes', require('./pacientes'));

module.exports = app;