const mongoose = require('mongoose');
const utils = require('../helpers/util');
const _ = require('lodash');

exports.list = async () => {
    try {
        const Bike = mongoose.model('Bike');
        return await Bike.find({});
    } catch(err) {
        throw(utils.createError(500, 'Bikes retrieve error', err));
    }
}


