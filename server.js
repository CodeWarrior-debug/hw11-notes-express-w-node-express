// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const fs = require('fs')
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();
const path = require('path');

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('notes', (req, res) => {    
    res.sendFile(path.join(__dirname, '/public/api/notes.html'));
  });

  app.get('/', (req, res) => {       
    res.sendFile(path.join(__dirname, '/public/api/index.html'));
  });

  // If no matching route is found default to home  QUESTIONS??
  app.get('/api/notes', function (err, res) {
      try{
    let noteData = fs.readFileSync('db/db.json');
    noteData = JSON.parse(noteData);
  } catch (err) {
      console.log(err);
  }
  });
;

app.post('/api/notes', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    try{
    let noteData=fs.readFileSync("db/db.json");
    noteData= JSON.parse(noteData);
    noteData.push(req.body); //
      res.json(true);
    } catch (err){
        console.log(err);
    }
  });
  

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});