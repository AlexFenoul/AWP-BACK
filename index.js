require('./app/db/db.connect');

const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./app/routes');

const port = process.env.PORT || 8080; // set our port

app.use('/', routes);
app.use(cors());

app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(err.status || 400).json({
    success: false,
    message: err.message || 'An error occured.',
    errors: err.error || [],
  });
  next()
});


app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found.' });
});

// Start the server
app.listen(port);

console.log(`Server started on port ${port}`);
