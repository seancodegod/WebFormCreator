// Code authored by Lincoln Bartlett
// lincolnbartlett@gmail.com


module.exports = (app) =>{
    
    const webformRoute = require('./webformRoute.js');
    const userRoute = require('./userRoute.js');

    app.use('/api/webform', webformRoute);
    app.use('/api/user', userRoute);

   
}