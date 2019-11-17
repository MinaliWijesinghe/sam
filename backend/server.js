const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport');
const path = require('path');

const PORT = 3000
const api = require('./routes/api')
const app = express()

var supplyAd = require('./routes/supplyAd.js');
var demandAd = require('./routes/demandAd.js');
var transportAd = require('./routes/transportAd.js');


app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', api)
app.get('/', function (req, res) {
    res.send('Hello from server')

})

app.use('/supplyAd', supplyAd);
app.use('/demandAd', demandAd);
app.use('/transportAd', transportAd);

app.listen(PORT, function () {
    console.log('Server running on localhost:' + PORT)
})