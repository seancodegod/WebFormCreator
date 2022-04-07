var express = require('express');
var router = express.Router(); 
const User = require('../models/userSchema');



router.post('/create',
      async (req, res) => {

            await res.send('Hello World');

      });



module.exports = router;