const express = require('express');
const mongoose = require ('mongoose');
const config = require ('./config/dev');
const FakeDb = require('./fake-db');
const rental = require ('./models/rental');

const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
    console.log("Mongodb connection successful");
});
    

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running');
})