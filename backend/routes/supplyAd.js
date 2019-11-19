const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { SupplyAd } = require('../models/supplyAd');

//router.get('/', (req, res) => {
    //SupplyAd.find((err, docs) => {
       // if (!err) { res.send(docs); }
       // else { console.log('Error in Retriving SupplyAds :' + JSON.stringify(err, undefined, 2)); }
   // });
//});

router.get("/", (req,res) => {
    SupplyAd.find({
        eDate: {
            $gt: new Date().toISOString()
        }
    })
    .then(docs => {
        console.log(docs);
        res.json(docs);
    })
    .catch(err => console.log(err));
});

router.post('/', (req, res) => {
    var sup = new SupplyAd({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        hDate: req.body.hDate,
        eDate: req.body.eDate,
        des: req.body.des,
        advertiser: req.body.advertiser,
        contactNo: req.body.contactNo
    });
    sup.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SupplyAd save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : $(req.params.id)`);

    SupplyAd.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving SupplyAd:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var sup = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        hDate: req.body.hDate,
        eDate: req.body.eDate,
        des: req.body.des,
        advertiser: req.body.advertiser,
        contactNo: req.body.contactNo
    };
    SupplyAd.findByIdAndUpdate(req.params.id, { $set: sup }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SupplyAd Upadte:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : $(req.params.id)`);

    SupplyAd.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SupplyAd Delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;