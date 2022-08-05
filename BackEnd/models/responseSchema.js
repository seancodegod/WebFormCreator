// Code authored by Lincoln Bartlett
// lincolnbartlett@gmail.com


const mongoose = require('mongoose');
const {Schema} = mongoose;


var responseSchema = new Schema({
    webform: {type: Schema.Types.ObjectId, ref :'webform'},
    response: String

});

module.exports = mongoose.model('response', responseSchema);