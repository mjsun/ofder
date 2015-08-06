var _ = require("underscore");

var data = [
{
  id: 1,
  name: 'mingjie',
  text: 'Hello world!'
},
{
  id: 2,
  name: 'mingjie',
  text: 'I want to have a cup of coffee!'
},
{
  id: 3,
  name: 'chris',
  text: 'Lets talk!'
},
{
  id: 4,
  name: 'june',
  text: 'I\'m hungry!'
},
{
  id: 5,
  name: 'chris',
  text: 'You should go eat!'
}
];

function all(){
  return _.clone(data);
}

function find(properties){
  var list = all();
  return _.where(list, properties);
}

function add(tweet){
  var id = data.length + 1;
  data.push({id: id, name: tweet.name, text: tweet.text});
}

module.exports = {
 all: all,
 find: find,
 add: add
};


