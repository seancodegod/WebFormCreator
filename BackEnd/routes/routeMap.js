module.exports = (app) =>{
    
    const webformRoute = require('./webformRoute.js');

    app.use('/api/webform', webformRoute);

   
}