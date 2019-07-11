const MapModel = require('../models/MapModel')

module.exports = {
    find: function(params, callback){
        MapModel.find(params,'_id description name', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    create: function(params, callback){

        MapModel.create(params, function(err, result){
            if(err){
                callback(err, null);
                return
            }
            callback(null, result);
        });
    },

    findById: function(id, callback){
        MapModel.findById(id, function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    }
}
