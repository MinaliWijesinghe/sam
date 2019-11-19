const mongoose = require('mongoose');

var DemandAd = mongoose.model('DemandAd', {
    userId:{ type:String},
    name: { type: String },
    maxPrice: { type: Number },
    quantity: { type: String },
    hDate: { type: String },
    eDate: { type: String },
    des: { type: String },
    advertiser: { type: String},
    contactNo: {type:String}
});

module.exports = { DemandAd };