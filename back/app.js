var express = require('express') ; 
var app = express() ; 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json())

Genre = require('./models/product.js');

//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/' , function (req , res) {
    res.send('hello ')
})

app.get('/api/genres' , function(req,res) {
    Genre.getGenres(function(err , genres){
        if(err){throw err ; }
        res.json(genres)
    });
})

app.get('/api/genres/:id' , function(req,res) {
    Genre.getGenresById( req.params.id ,function(err , genres){
        if(err){throw err ; }
        res.json(genres)
    });
})


app.post('/api/genres/' , function(req,res) {
    var genre = req.body ;

    Genre.addGenre( genre ,function(err , genres){
        if(err){throw err ; }
        res.json(genres)
    });
})


app.delete('/api/genres/:id' , function(req,res) {
    Genre.removeGenre( req.params.id ,function(err , genres){
        if(err){throw err ; }
        res.json(genres)
    });
})



app.post('/api/genres' )

app.listen(3000);
console.log('runnning on port 3000...')