const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths


// Database Connection
// mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true, promiseLibrary: global.Promise }, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
      console.log(config.secret);
    console.log('Connected to database: ' + config.db);
  }
});


// Provide static directory for frontend
app.use(express.static(__dirname + '/client/dist/'));

// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});


app.listen(8080,()=>{
    
    console.log('Liestening on port 8080');
});