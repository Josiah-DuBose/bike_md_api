const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    date: Date,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    rating: Number
});

mongoose.model('Response', schema);