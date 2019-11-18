const mongoose = require('mongoose');

var DemandAd = mongoose.model('DemandAd', {
    name: { type: String },
    maxPrice: { type: Number },
    quantity: { type: String },
    hDate: { type: String },
    eDate: { type: String },
    des: { type: String }
});

module.exports = { DemandAd };