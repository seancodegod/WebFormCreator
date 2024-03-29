// Code authored by Lincoln Bartlett
// lincolnbartlett@gmail.com

// EXPRESS -  API route manager   
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
const corsOptions = {
  origin: "*"
};

//BODYPARSER- Request parsing
const bodyparser = require('body-parser');
app.use(bodyparser.json());



// Logging
const morgan = require('morgan');
app.use(morgan('tiny'));

//MONGO - database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017')



app.use(express.static(__dirname + '/build'));

require('./routes/routeMap.js')(app);

app.get('/', (req, res) => {
    res.sendFile('./index.html');
});

//Redirect any malformed URL
// app.get('*', (req, res) => {
//   res.redirect('/');
// });


app.listen(PORT, () => {
  console.log(`Webform API on PORT: ${PORT}`)
});