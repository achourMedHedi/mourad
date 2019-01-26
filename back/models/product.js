var mongoose = require('mongoose');

//genre shema

var genreShema = mongoose.Schema({
    name : {
        type : String  , 
        required : true
    }
   
})

var Genre = module.exports = mongoose.model('Genre' , genreShema)

// get all products 

module.exports.getGenres = function(callback , limit){
    Genre.find(callback).limit(limit)
}

module.exports.getGenresById = function(id , callback) {
    Genre.findById(id , callback);
}

//add genre 

module.exports.addGenre = function(genre , callback) {
    Genre.create(genre , callback);
}

//delete genre 

module.exports.removeGenre = function(id , callback) {
    var query = {_id : id}
    Genre.remove(query , callback);
}
