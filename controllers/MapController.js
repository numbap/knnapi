// Load dependencies
const MapModel = require('../models/MapModel')
const ObjectId = require('mongodb').ObjectID;

module.exports = {
    // Find all maps
    find: function(params, callback){
        MapModel.find(params,'_id description name locations', function(err, results){
            if(err){
                callback(err, null);
                return;
            }
            callback(null, results);
        })
    },

    // Create a new map
    create: function({_id, name, description}, callback){
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

    // Delete a map
    delete: function(_id, callback){
        _id = _id || new ObjectId() 
        MapModel.findByIdAndDelete(_id,
            function(err, res) {
                if(err){
                    callback(err, null);
                    return
                }
                console.log(res)
                callback(null, res);
        });
    },

    // Create a location
    createLocation: async function(map_id, newObj, callback){
        newObj._id = newObj._id || new ObjectId()
        map_id = map_id || new ObjectId()  
      
        x = await MapModel
        .findById(map_id, function(err, res) { 

            if(err){
                return err;
            }
            return res;
        })

        MapModel
        .findByIdAndUpdate(map_id, 
            {
                $set:
                    {locations: 
                        x.locations.filter(x => x._id != newObj._id).concat(newObj)
                    }
            },
                    { safe: true, upsert: true, new: true, newObj: newObj },
                    function(err, res) {
                        if(err){
                            callback(err, null);
                            return
                        }
                        callback(null, res);
                    }
        );
    },

    // Delete a location
    deleteLocation: async function(userId, locationId, callback){

        MapModel
        .update(
            { _id: userId }, 
            { "$pull": { "locations": { "_id": locationId } }}, 
            { safe: true, multi:true }, 
            function(err, res) {
                if(err){
                    callback(err, null);
                    return
                }
                callback(null, res);
        })
    },

    // Not used yet. May remove later
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







// _id = _id || new ObjectId()
// map_id = map_id || new ObjectId()  
// MapModel
// .findById('5d2531683d54c9166f41b983')
// .select('locations')
// .findByIdAndUpdate('5d2531683d54c9166f41b986', 
//     {lat:'999999', lon:'999999'},
//     {upsert: true, 'new': true},
//     function(err, res) {
//         if(err){
//             callback(err, null);
//             return
//         }
//         console.log(res)
//         callback(null, res);
//     }); 