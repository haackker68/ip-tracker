const mongoose = require('mongoose');

// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/IP-Tracker', {
useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false }); 
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;


// handle mongo error
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
 console.log('Database Connected');
});


// IP logs
var IPSchema = mongoose.Schema({
  userid      :   { type: String },
  ip          :   { type: String },
  end_point   :   { type: String },
  req         :   {type: [Object], blackbox: true}
},{timestamps:true});

module.exports.IP = mongoose.model('IP_logs', IPSchema);

