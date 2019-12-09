const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    brand: String,
    year: Number,
    model: String
});

mongoose.model('Bike', schema);