// Load dependencies
const mongoose = require('mongoose');  

// Schema for main map model
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