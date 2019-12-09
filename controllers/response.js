const mongoose = require('mongoose');
const utils = require('../helpers/util');
const _ = require('lodash');

exports.list = async () => {
    try {
        const Response = mongoose.model('Response');
        return await Response.find({});
    } catch(err) {
        throw(utils.createError(500, 'Response list error', err));
    }
}

exports.get = async (id) => {
    try {
        const Response = mongoose.model('Response');
        return await Response.findOne({_id: id}).populate('user').populate('comments');
    } catch(err) {
        throw(utils.createError(500, 'Response retrieve error', err));
    }
}

exports.create = async (body) => {
    try {
        const Response = mongoose.model('Response');
        return await Response.create(body);
    } catch(err) {
        throw(utils.createError(500, 'Response create error', err));
    }
}

exports.updateOne = async (id, body) => {
    try {
        const Response = mongoose.model('Response');
        const updateBody = body.newItem ? 
            { $push: { [newItem.name]: body.newItem } } : {...body};
        return await Response.findOneAndUpdate({ _id: id }, updateBody, { new: true }).populate('user').populate('comments');
    } catch(err) {
        throw(utils.createError(500, 'Response update error', err));
    }
}


