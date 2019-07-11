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

router.get('/:id', function(req, res, next){
    const id = req.params.id

    const picked = fakeNews.find(o => o.id === id);

    res.status(200).send({
        data: picked
    })

})


module.exports = router