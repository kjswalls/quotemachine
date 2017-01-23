// Express initializes app as a function handler, which is supplied to an HTTP server
var express = require('express');
var app = express();
var http = require('http').Server(app);

// Include the path module to safely resolve relative paths. For use with res.sendFile
var path = require('path');

// Set public directory for serving static files
app.use(express.static(__dirname));

// Define a route handler to serve the site index
app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
});

// Set the web server to listen on port 3000 or an environment port variable, if one is supplied
var port = process.env.PORT || 3000;
http.listen(port, function() {
    console.log('listening on *: ' + port);
});
