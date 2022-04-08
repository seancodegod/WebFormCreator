const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000


//MONGO
const mongoose = require('mongoose');



app.use(express.static(__dirname + '/build'));

require('./routes/routeMap.js')(app);

app.get('/', (req, res) => {
    res.sendFile('./index.html');
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})