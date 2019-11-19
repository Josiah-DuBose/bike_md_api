require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const path  = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const port = process.env.PORT || 8560;
const app = express();
const routes = require('./routes');
const buildDB = require('./DB_data/populate_table').buildDataArray;

// Models
require('./models/user');
require('./models/bike');
require('./models/comment');
require('./models/post');
require('./models/response');

//Connect to DB;
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true });

// Initial DB Bike populate 
const Bike = mongoose.model('Bike');
Bike.countDocuments({}, function(err, c) {
    console.log("count", c);
    if (!c) {
        buildDB('DB_data/csv/bike.csv').then(data => {
            Bike.insertMany(data, function(err, docs) {
                if (err) console.log("err", err);
            });
        });
    }
});

// Parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Define Routes
routes(app);

// Error handler
app.use(function (err, req, res, next) {
    if (!_.isEmpty(err)) {
        res.status(_.get(err, 'statusCode', 500));
        res.json({
            title: _.get(err, 'title', 'Error'),
            detail: _.get(err, 'detail', err).toString(),
            statusCode: _.get(err, 'statusCode', 500)
        });
    }
});


app.listen(port, () => console.log(`API listening on port ${port}!`));

module.exports = app;
