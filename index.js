var http = require('http');
var express = require('express');
var router = express.Router();

var app = express();

/* GET home page. */
app.get('/', function (req, res, next) {


  var cmd = ['phantomjs', 'generator.js', req.query.url].join(' ');
  var exec = require('child_process').exec;

  exec(cmd, function (error) {
      if (error) {
        res.write('Something went wrong, try reloading the page');
        res.write(error);
      } else {
        res.write('<a href=\"screen\">Voir l\'image</a>');
      }
      res.end();
  });

});

app.get('/screen', function (req, res, next) {
  var fs = require('fs');
    fs.readFile( __dirname + '/save.png', function (err, data) {
      if (err) {
        throw err;
      }
      res.write(data);
      res.end();
    });
});

// listen
http.createServer(app).listen(3000);
console.log('Listen localhost:3000');
