const MapModel = require('../models/MapModel')
const ObjectId = require('mongodb').ObjectID;

module.exports = {
    find: function(params, callback){
        MapModel.find(params,'_id description name locations', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    create: function({_id, name, description}, callback){
        console.log({_id, name, description}, 'rrrrrrr')
        _id = _id || new ObjectId() 
        MapModel.findByIdAndUpdate(_id,
            { name: name, description: description },
            {upsert: true, 'new': true},
            function(err, res) {
                if(err){
                    callback(err, null);
                    return
                }
                console.log(res)
                callback(null, res);
        });
    },


    delete: function({_id}, callback){
        MapModel.findByIdAndRemove(_id,
            function(err, res) {
                if(err){
                    callback(err, null);
                    return
                }
                callback(null, res);
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
