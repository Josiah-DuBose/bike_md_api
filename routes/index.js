const userRoute = require('./user');
const bikeRoute = require('./bike')

module.exports = (app) => {
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/bikes', bikeRoute);
};
