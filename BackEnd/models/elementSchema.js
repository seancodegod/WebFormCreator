// Code authored by Lincoln Bartlett
// lincolnbartlett@gmail.com


const mongoose = require('mongoose');
const {Schema} = mongoose;


var elementSchema = new Schema({
    label: String,
    inputType: String,
    isRequired: Boolean,
    fieldId: Number
});

module.exports = mongoose.model('element', elementSchema);