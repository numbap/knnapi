const mongoose = require('mongoose');  

const MapSchema = new mongoose.Schema({  
    id: String,
    name: String,
    description: String,
    locations: [{
        id: String,
        location: String, 
        lat: String,
        lon: String
    }]      
});

mongoose.model('MapModel', MapSchema);

module.exports = mongoose.model('MapModel');