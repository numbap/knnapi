const mongoose = require('mongoose');  

const LocationSchema = new mongoose.Schema({  
    location: {type: String, default: '', trim: true},
    lat: {type: String, default: '', trim: true},
    lon: {type: String, default: '',  trim: true} 
});

mongoose.model('LocationModel', LocationSchema);

module.exports = mongoose.model('MapModel');