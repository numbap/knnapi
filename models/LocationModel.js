// Load dependencies
const mongoose = require('mongoose');  

// This model may be used at a later point
const LocationSchema = new mongoose.Schema({  
    location: {type: String, default: '', trim: true},
    lat: {type: String, default: '', trim: true},
    lon: {type: String, default: '',  trim: true} 
});

mongoose.model('LocationModel', LocationSchema);

module.exports = mongoose.model('MapModel');