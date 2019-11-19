const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken')

var { DemandAd } = require('../models/demandAd');

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

  router.get('/getdemandadsbyuser',verifyToken, (req, res) => {

    DemandAd.find({ userId:req.userId },(err, docs) => {
       if (!err) { res.send(docs); }
       else { console.log('Error in Retriving DemandAds :' + JSON.stringify(err, undefined, 2)); }
   });
});

router.get("/", (req,res) => {
    DemandAd.find({
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
router.post('/',verifyToken, (req, res) => {
    console.log('userId'+req.userId)
    var dem = new DemandAd({
        userId:req.userId,
        name: req.body.name,
        maxPrice: req.body.maxPrice,
        quantity: req.body.quantity,
        hDate: req.body.hDate,
        eDate: req.body.eDate,
        des: req.body.des,
        advertiser: req.body.advertiser,
        contactNo: req.body.contactNo
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
        maxPrice: req.body.maxPrice,
        quantity: req.body.quantity,
        hDate: req.body.hDate,
        eDate: req.body.eDate,
        des: req.body.des,
        advertiser: req.body.advertiser,
        contactNo: req.body.contactNo
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