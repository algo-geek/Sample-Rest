const express = require('express');
const tourRouter = require('./routes/tour.route');

const app = express();



app.use(express.json());

// send request from postman-> app.use(express.json()); -> post request

app.use("/api/v1/tours", tourRouter);

module.exports = app;
