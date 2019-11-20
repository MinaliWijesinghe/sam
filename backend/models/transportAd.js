const mongoose = require('mongoose');

var TransportAd = mongoose.model('TransportAd', {
    location: { type: String },
    destination: { type: String },
    vehicleType: { type: String },
    packageType: { type: String },
    name: { type: String },
    maxPrice: { type: Number },
    quantity: { type: String },
    date: { type: String },
    des: { type: String },
    advertiser: { type: String},
    contactNo: {type:String}
});

module.exports = { TransportAd };