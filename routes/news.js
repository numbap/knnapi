// Load dependencies
const express = require('express')
const router = express.Router()
const MapsController = require('./../controllers/MapController')
var ObjectId = require('mongodb').ObjectID

// List all maps
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

// Create a map
router.post('/', function(req, res, next) {
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

// Delete a map
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

// Add a location to a specific map
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


// Delete a pecific location from a specific map 
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


// Not used. May remove later
router.get('/:id', function(req, res, next){
    MapsController.findById(req.params.id, 
        function(err, results){
        res.status(200).send({
            data: results
        }) 
    })
})

module.exports = router
