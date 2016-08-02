var express = require('express');
var app = express();
var ip = require('ip');

var requestIp = require('request-ip');
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// start the server


//newer version
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
var os = require('os');
var ans= "test";

var ipa=""

app.get('/*', function(req, res) {
	
   
   
 
var ipa = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  var language =  req.headers["accept-language"].split(',')[0]
  var ops= os.type();
  ans = '{"ipaddress":"'+ipa+'","language":"'+language+'","software":"'+ops+'"}'

  res.send( ans);
});


app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});