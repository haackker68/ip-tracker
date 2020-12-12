const db = require('../database.js')
var express = require('express');
var router = express.Router();


router.get('/offer', function(req, res)  {
    const ips =req.header('x-forwarded-for') || req.connection.remoteAddress;
    db.IP.create({
      ip : ips,
      end_point : req.url
    }, (err) => {
      if (!err) res.status(200).send({})
    })
  })

  module.exports = router;
