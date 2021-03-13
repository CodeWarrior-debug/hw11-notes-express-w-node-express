const path = require('path');

module.exports = (app) => {
    // => HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
  
    app.get('/index', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));  //* `GET /notes` should return the `notes.html` file.
      });

    // If no matching route is found default to index
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));  //* `GET *` should return the `index.html` file.
    });
  };


//*****************HOT RESTAURANT BELOW */

// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

// const path = require('path');

// ROUTING

// module.exports = (app) => {
//   // => HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content

//   app.get('/tables', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/tables.html'));
//   });

//   app.get('/reserve', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/reserve.html'));
//   });

//   // If no matching route is found default to home
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/home.html'));
//   });
// };
