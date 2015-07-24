var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');



//var db = mongoose.connect('mongodb://localhost/bookAPI');

var db = mongoose.connect('mongodb://lordpiti:Kidswast1@ds036648.mongolab.com:36648/MongoLab-e');

var Book = require('./models/bookModel');
var Category = require('./models/categoryModel');

var app = express();

var port = process.env.PORT || 3000;

//CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'POST, PUT, PATCH, DELETE, GET, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book, Category);


app.use('/api/books', bookRouter); 


app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});