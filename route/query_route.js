var express = require('express');
var app = express.Router();
var db = require("../db/imdb_query");

app.get('/', function(req, res){
  res.render("query.html", {});
});

app.post('/q', function(req, res){
  console.log({'db':db});
  db.query(req.body.query_text, function(err, results){
  	 res.render("query.html", {query: req.body.query_text, results: results, error: err})
  });
})

module.exports = app;

