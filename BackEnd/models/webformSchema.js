// Code authored by Lincoln Bartlett
// lincolnbartlett@gmail.com


const mongoose = require('mongoose');
const {Schema} = mongoose;


var webformSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref :'user'},
    createdOn: { type : Date, default: Date.now },
    expiresOn: { type : Date },
    title: String,
    body: String,
    isActive: Boolean,
    elements: [{type: Schema.Types.ObjectId, ref :'element'}],
    responses: [{type: Schema.Types.ObjectId, ref : 'response'}]

});

module.exports = mongoose.model('webform', webformSchema);