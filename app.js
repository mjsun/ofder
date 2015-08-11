var express = require("express");
var swig = require("swig");
var morgan = require("morgan");
var app = express();
var bodyParser = require("body-parser");
var twitterRoute = require("./route/tweet_route");
var queryRoute = require("./route/query_route");


app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname+"/views");
app.use(morgan("dev"));

app.use(express.static(__dirname+"/public"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


swig.setDefaults({ cache: false });

app.get('/', function(req, res){
  res.render("index.html");
});

app.use('/tweets', twitterRoute);

app.use('/sqlite3', queryRoute);

app.listen(3001); 
