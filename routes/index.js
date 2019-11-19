const userRoute = require('./user');

module.exports = (app) => {
    app.use('/api/v1/users', userRoute);
};
