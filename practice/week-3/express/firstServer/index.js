// Including the Express package for our script.
const express = require("express");

// Run the Express server.
const app = express();

// Load HTTP and attach our Express server to it.
const http = require("http").Server(app);

// The port we are going to listen on.
const port = 8080;

// Tells HTTP what port to listen to.
http.listen(port);

// Express Routes
// epress.static("./public_html") -> used to tell Epress that it is a directory/folder.

app.use( "/client", express.static( "./public_html") );
app.use( "/secretwebpage", express.static("./secret") );
app.use( "/", express.static("./publec_html") );

// Signify Express Server is running.
console.log(`Express is now running on port ${port}`);