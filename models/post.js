const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    text: String,
    system: String,
    date: Date,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    responses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Response'
        }
    ]
});

mongoose.model('Post', schema);