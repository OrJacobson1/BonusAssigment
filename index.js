const express = require("express");
const bodyParser = require('body-parser')
const ticketRouter = require('./Routes/Tickets')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
app.use(bodyParser.json())

const main = async() => await mongoose.connect('mongodb://localhost/test')
main()
app.use(express.static("public"));
app.use('/tickets', ticketRouter)
app.listen(PORT, () => console.log(`Listening in ${PORT}...`));