const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    brand: String,
    year: Number,
    model: String,
    mileage: Number,
    displacement: Number
});

mongoose.model('Bike', schema);