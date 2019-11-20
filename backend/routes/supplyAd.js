const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken')

var { SupplyAd } = require('../models/supplyAd');

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

  router.get('/getsupplyadsbyuser',verifyToken, (req, res) => {

    SupplyAd.find({ userId:req.userId },(err, docs) => {
       if (!err) { res.send(docs); }
       else { console.log('Error in Retriving SupplyAds :' + JSON.stringify(err, undefined, 2)); }
   });
});


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

router.post('/', verifyToken, (req, res) => {
    console.log('userId'+req.userId)
    var sup = new SupplyAd({
        userId:req.userId,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        hDate: req.body.hDate,
        eDate: req.body.eDate,
        des: req.body.des,
        advertiser: req.body.advertiser,
        contactNo: req.body.contactNo,
        userPic: req.body.userPic,
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
        contactNo: req.body.contactNo,
        userPic: req.body.userPic,
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