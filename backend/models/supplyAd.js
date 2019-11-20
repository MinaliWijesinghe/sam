const mongoose = require('mongoose');

var SupplyAd = mongoose.model('SupplyAd', {
    userId:{ type:String},
    name: { type: String },
    price: { type: Number },
    quantity: { type: String },
    hDate: { type: String },
    eDate: { type: String },
    des: { type: String },
    advertiser: { type: String},
    contactNo: {type:String},
    userPic:{ type:String },
    
});

module.exports = { SupplyAd };