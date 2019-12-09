const mongoose = require('mongoose');
const utils = require('../helpers/util');
const _ = require('lodash');

exports.list = async () => {
    try {
        const Post = mongoose.model('Post');
        return await Post.find({});
    } catch(err) {
        throw(utils.createError(500, 'Post retrieve error', err));
    }
}

exports.get = async (id) => {
    try {
        const Post = mongoose.model('Post');
        return await Post.findOne({_id: id}).populate('bike').populate('user').populate('comments').populate('responses');
    } catch(err) {
        throw(utils.createError(500, 'Post retrieve error', err));
    }
}

exports.create = async (body) => {
    try {
        const Post = mongoose.model('Post');
        return await Post.create(body);
    } catch(err) {
        throw(utils.createError(500, 'Post retrieve error', err));
    }
}

exports.updateOne = async (id, body) => {
    try {
        const Post = mongoose.model('Post');
        const updateBody = body.newItem ? 
            { $push: { [newItem.name]: body.newItem } } : {...body};
        return await Post.findOneAndUpdate({ _id: id }, updateBody, { new: true }).populate('bike').populate('user').populate('comments').populate('responses');
    } catch(err) {
        throw(utils.createError(500, 'Post retrieve error', err));
    }
}


