const mongoose = require('mongoose');
const utils = require('../helpers/util');
const _ = require('lodash');

exports.list = async () => {
    try {
        const Bike = mongoose.model('Bike');
        return await Bike.find({}, {__v: 0});
    } catch(err) {
        throw(utils.createError(500, 'Bikes retrieve error', err));
    }
}

exports.get = async (id) => {
    try {
        const Bike = mongoose.model('Bike');
        return await Bike.find({_id: id}, {__v: 0});
    } catch(err) {
        throw(utils.createError(500, `Bike retrieve error for ${id}`, err));
    }
}


