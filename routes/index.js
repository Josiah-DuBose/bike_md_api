const userRoute = require('./user');
const bikeRoute = require('./bike')
const postRoute = require('./post');
const responseRoute = require('./response');

module.exports = (app) => {
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/bikes', bikeRoute);
    app.use('/api/v1/posts', postRoute);
    app.use('/api/v1/responses', responseRoute);
};
