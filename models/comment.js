const mongoose  = require('mongoose');

const schema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    date: Date
});

mongoose.model('Comment', schema);