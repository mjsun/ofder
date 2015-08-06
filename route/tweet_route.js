var express = require("express");
var app = express.Router();
var tb = require("../my_modules/tweet_bank");

app.get('/', function(req, res){
  res.render("tweets.html", {tweets: tb.all(), display_name: 'All', mode:'ALL_TWEETS'});
});

app.get('/:name', function(req, res){
  var name = req.params.name;
  res.render("tweets.html", {tweets: tb.find({name:name}), user_name: name, mode: 'SINGLE_USER'})
});

app.post('/submit/add', function(req, res){
  var body = req.body;
  tb.add({name: body.user_name, text: body.tweet_text});
  res.redirect("/tweets/"+body.user_name);
});

module.exports = app;
