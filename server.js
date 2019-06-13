// Get dependencies
const express = require('express');
const path = require('path');


const app = express();



// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/Funktory-Webapp')));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/Funktory-Webappindex.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */


/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`API running on localhost:${port}`));
