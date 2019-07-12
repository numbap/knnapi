const express = require('express')
const router = express.Router()
const MapsController = require('./../controllers/MapController')

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



router.delete('/map', function(req, res, next) {

    MapsController.delete(req.query, function(err, results){
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

router.get('/:id', function(req, res, next){
    MapsController.findById(req.params.id , 
    function(err, results){
            res.status(200).send({
                data: results
            })
    })
})

module.exports = router

