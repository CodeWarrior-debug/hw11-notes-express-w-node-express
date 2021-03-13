const notesData = require('../db/db.json')

module.exports= (app) => {
    app.get('/api/notes', (req, res) => res.json(notesData)); //***FIX api tables****/

    app.post('/api/notes', (req, res) => {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.// It will do this by sending out the value "true" have a table// req.body is available since we're using the body parsing middleware
          notesData.push(req.body);  //should receive a new note to save on the request body, add it to the `db.json` file, 
          res.json(true);
          //now need to return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
        }
   );
}

  
// The following API routes should be created:
  
//* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

//* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).



//**********************************BELOW IS HOT RESTAURANT******************/

// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

// const tableData = require('../data/tableData');
// const waitListData = require('../data/waitinglistData');

// ROUTING

// module.exports = (app) => {
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   // ---------------------------------------------------------------------------

//   app.get('/api/tables', (req, res) => res.json(tableData));

//   app.get('/api/waitlist', (req, res) => res.json(waitListData));

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------

//   app.post('/api/tables', (req, res) => {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     } else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };
