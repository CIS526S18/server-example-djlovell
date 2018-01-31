/* Single threaded model for a web server. */
"use strict";

// PORT DEFINITIONS
const PORT = 3000;

// Import the http library, like include/import
const http = require( 'http' );

// Import the fs library
const fs = require( 'fs' );

function handleRequest( req, res ) 
    {
    var path = "./public" + req.url;

    switch( req.url )
        {
        case '/':
        case '/openhouse.html':
            res.end( fs.readFileSync( 'public/openhouse.html' ) );
            break;

        case '/openhouse.css':
            res.end( fs.readFileSync( 'public/openhouse.css' ) );
            break;

        case '/openhouse.js':
            res.end( fs.readFileSync( 'public/openhouse.js' ) );
            break;

        default:
            res.statusCode = 404;
            res.end( "File not found!" );
        }
    }

// Create a web server
var server = http.createServer( handleRequest );

// Start listening on PORT
server.listen
    ( 
    PORT, 
    function()
        {
        console.log( "listening on PORT " + PORT );
        } 
    );