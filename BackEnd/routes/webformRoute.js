// Code authored by Lincoln Bartlett
// lincolnbartlett@gmail.com


var express = require('express');
var router = express.Router();
const User = require('../models/userSchema');
const Webform = require('../models/webformSchema');
const Element = require('../models/elementSchema');
const Response = require('../models/responseSchema');

// WEBFORM ROUTES
router.post('/create/', async (req, res) => {

      var newWebform = new Webform({
            author: req.body.author,
            createdOn: Date.now(),
            title: req.body.title,
            body: req.body.body,
            isActive: req.body.isActive
      });

      await Webform.create(newWebform);

      req.body.elements.forEach(async (element) => {

            var newElement = new Element({
                  label: element.label,
                  inputType: element.inputType,
                  isRequired: element.isRequired,
                  fieldId: element.fieldId
            });

            await Element.create(newElement);


            await Webform.findOneAndUpdate(

                  { _id: newWebform._id },
                  {
                        $push: { [`elements`]: newElement._id }
                  },
                  { safe: true, multi: false });

      }

      );

      await User.findOneAndUpdate(

            { _id: req.body.author },
            {
                  $push: { [`forms.${req.body.formType}`]: newWebform._id }
            },
            { safe: true, multi: false });


      res.send(newWebform._id);

});

//Get webform by ID
router.get('/:id/', async (req, res) => {
      var webform = await Webform.findById(req.params.id).populate('elements').populate('responses');
      res.send(webform);
});

//Responses
router.post('/:id/submit', async (req, res) =>{

      console.log(req.body);
      

      var newResponse = new Response({
            webform: req.params.id,
            response: req.body.response
      });

      await Response.create(newResponse);

      await Webform.findOneAndUpdate(

            { _id: req.params.id },
            {
                  $push: { [`responses`]: newResponse._id }
            },
            { safe: true, multi: false });

      res.send(newResponse._id);

});


//Elements
router.post('/newelement/', async (req, res) => {

      var newElement = new Element({
            label: req.body.label,
            inputType: req.body.inputType,
            isRequired: req.body.isRequired
      });

      await Element.create(newElement);

      res.send(newElement._id);

});


module.exports = router;