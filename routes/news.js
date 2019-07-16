const express = require('express')
const router = express.Router()
const MapsController = require('./../controllers/MapController')
var ObjectId = require('mongodb').ObjectID

router.get('/', function(req, res, next) {

    MapsController.find(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    });
});

router.post('/map', function(req, res, next) {
    MapsController.create(req.query, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    });
});

router.delete('/:id', function(req, res, next) {

    MapsController.delete(req.params.id, function(err, results){
        if(err){
            console.log(err);
            res.json({
                success: 0,
                error: err
            });
            return;
        }
        res.json({
            success: 1,
            data: results
        });
    });
});

// Add a location to a specific ID
router.post('/:id', function(req, res, next) {
    MapsController.createLocation(req.params.id,
        req.query, 
        function(err, results){

            if(err){
                console.log(err);
                res.json({
                    success: 0,
                    error: err
                });
                return;
            }
            res.json({
                success: 1,
                data: results
            });
    });
});


// // Not tested yet. To delete id. 
router.delete('/:id/:locationId', function(req, res, next) {
    MapsController.deleteLocation(req.params.id, req.params.locationId, 
        function(err, response){
            if(err){
                console.log(err);
                res.json({
                    success: 0,
                    error: err
                });
                return;
            }
            res.json({
                success: 1,
                data: response
            });
    });
});



router.get('/:id', function(req, res, next){
    MapsController.findById(req.params.id, 
        function(err, results){
        res.status(200).send({
            data: results
        }) 
    })
})



module.exports = router



// user = api.mongodb.userModel;
// ObjectId = require('mongoose').Types.ObjectId;
// return user
//     .findOne({email : params.username})
//     .select('inventories')
//     .find({'title': 'activeInventory'})
//     //also tried
//     //.where('title')
//     //.equals('activeInventory')
//     .exec(function(err, result){
//         console.log(err);
//         console.log(result);
//     });



// router.get('/:id', function(req, res, next){
//     MapsController.find({"locations._id": ObjectId(req.params.id)}, 
//         function(err, results){
//         res.status(200).send({
//             data: results
//         }) 
//     })
// })