const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bike');
const isAuthenticated = require('../middlewares/auth').isAuthenticated;
const _ = require('lodash');

router.route('/').get(isAuthenticated, async (req, res, next) => {
    try {
        const response = await bikeController.list(req);
        res.json(response);
    } catch(err) { 
        console.error(err);
        next(err);
    }
});

router.route('/:id').get(isAuthenticated, async (req, res, next) => {
    try {
        const response = await bikeController.readOne(_.get(req, 'id'));
        res.json(response);
    } catch(err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;
 