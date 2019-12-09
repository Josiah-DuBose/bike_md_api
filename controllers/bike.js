const mongoose = require('mongoose');
const Utils = require('../helpers/util');
const _ = require('lodash');

exports.list = async () => {
    try {
        const Bike = mongoose.model('Bike');
        return await Bike.find({}, {__v: 0});
    } catch(err) {
        throw(Utils.createError(500, 'Bikes retrieve error', err));
    }
}

exports.readOne = async (id) => {
    try {
        const Bike = mongoose.model('Bike');
        return await Bike.findOne({_id: id}, {__v: 0});
    } catch(err) {
        throw(Utils.createError(500, `Bike retrieve error for ${id}`, err));
    }
}


