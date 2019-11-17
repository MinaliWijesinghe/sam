const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { TransportAd } = require('../models/transportAd');

router.get('/', (req, res) => {
    TransportAd.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving TransportAds :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var tra = new TransportAd({
        location: req.body.location,
        destination: req.body.destination,
        vehicleType: req.body.vehicleType,
        packageType: req.body.packageType,
        name: req.body.name,
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice,
        quantity: req.body.quantity,
        date: req.body.date,
        des: req.body.des,
    });
    tra.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SupplyAd save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {

    // if (!ObjectId.isValid(req.params.id))
    //     return res.status(400).send(`No record with given id : $(req.params.id)`);

    TransportAd.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }

        else { console.log('Error in Retriving Employee:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var tra = {
        location: req.body.location,
        destination: req.body.destination,
        vehicleType: req.body.vehicleType,
        packageType: req.body.packageType,
        name: req.body.name,
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice,
        quantity: req.body.quantity,
        date: req.body.date,
        des: req.body.des,
    };
    TransportAd.findByIdAndUpdate(req.params.id, { $set: tra }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SupplyAd Upadte:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : $(req.params.id)`);

    TransportAd.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SupplyAd Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;