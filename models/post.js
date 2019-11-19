const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    text: String,
    date: Date,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    responses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Response'
        }
    ]
});

mongoose.model('Post', schema);