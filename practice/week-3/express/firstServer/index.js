// Including the Express package for our script.
const express = require("espress");

// Run the Express server.
const app = express();

// Load HTTP and attach our Express server to it.
const http = require("http").Server(app);

// The port we are going to listen on.
const port = 8080;

// Express Routes
// epress.static("./public_html") -> used to tell Epress that it is a directory/folder.

app.use( "/client", epress.static( "./public_html" ) );

