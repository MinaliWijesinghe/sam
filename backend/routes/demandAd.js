const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { DemandAd } = require('../models/demandAd');

router.get('/', (req, res) => {
    DemandAd.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving DemandAds :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var dem = new DemandAd({
        name: req.body.name,
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice,
        quantity: req.body.quantity,
        hDate: req.body.hDate,
        eDate: req.body.eDate,
        des: req.body.des,
    });
    dem.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in DemandAd save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : $(req.params.id)`);

    DemandAd.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var dem = {
        name: req.body.name,
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice,
        quantity: req.body.quantity,
        hDate: req.body.hDate,
        eDate: req.body.eDate,
        des: req.body.des,
    };
    DemandAd.findByIdAndUpdate(req.params.id, { $set: dem }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in DemandAd Upadte:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : $(req.params.id)`);

    DemandAd.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in DemandAd Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;