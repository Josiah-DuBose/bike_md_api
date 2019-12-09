const express = require('express');
const router = express.Router();
const responseController = require('../controllers/response');
const isAuthenticated = require('../middlewares/auth').isAuthenticated;
const _ = require('lodash');
const utils = require('../helpers/util');

router.route('/').get(isAuthenticated, async (req, res, next) => {
    try {
        const response = await responseController.list(req);
        res.json(response);
    } catch(err) {
        console.error(err);
        next(err);
    }
});

router.route('/').post(isAuthenticated, async (req, res, next) => {
    try {
        if (!_.get(req, 'body') || _.isEmpty(_.get(req, 'body'))) {
            throw(utils.createError(400, "Create Response Error", "Missing request body."));
        }
        const response = await responseController.create(_.get(req, 'body'));
        res.json(response);
    } catch(err) {
        console.error(err);
        next(err);
    }
});

router.route('/:id').get(isAuthenticated, async (req, res, next) => {
    try {
        if (!_.get(req, 'params.id')) {
            throw(utils.createError(400, "No Response id provided", 'Please try again with a valid post ID.'));
        }
        const response = await responseController.readOne(_.get(req, 'params.id'));
        res.json(response);
    } catch(err) {
        console.error(err);
        next(err);
    }
});

router.route('/:id').put(isAuthenticated, async (req, res, next) => {
    try {
        if (!_.get(req, 'body') || _.isEmpty(_.get(req, 'body'))) {
            throw(utils.createError(400, "Update Response Error", "Missing request body."));
        }
        const response = await responseController.updateOne(_.get(req, 'params.id'), _.get(req, 'body'));
        res.json(response);
    } catch(err) {
        console.error(err);
        next(err);
    }
});


module.exports = router;
