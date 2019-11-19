const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken')

var { TransportAd } = require('../models/transportAd');

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
      return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
      return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
  }

  router.get('/gettransportadsbyuser',verifyToken, (req, res) => {

    TransportAd.find({ userId:req.userId },(err, docs) => {
       if (!err) { res.send(docs); }
       else { console.log('Error in Retriving TransportAds :' + JSON.stringify(err, undefined, 2)); }
   });
});

router.get("/", (req,res) => {
    TransportAd.find({
        date: {
            $gt: new Date().toISOString()
        }
    })
    .then(docs => {
        console.log(docs);
        res.json(docs);
    })
    .catch(err => console.log(err));
});

router.post('/',verifyToken, (req, res) => {
    console.log('userId'+req.userId)
    var tra = new TransportAd({
        userId:req.userId,
        location: req.body.location,
        destination: req.body.destination,
        vehicleType: req.body.vehicleType,
        packageType: req.body.packageType,
        name: req.body.name,
        maxPrice: req.body.maxPrice,
        quantity: req.body.quantity,
        date: req.body.date,
        des: req.body.des,
        advertiser: req.body.advertiser,
        contactNo: req.body.contactNo
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

        else { console.log('Error in Retriving TransportAd:' + JSON.stringify(err, undefined, 2)); }
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
        advertiser: req.body.advertiser,
        contactNo: req.body.contactNo
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