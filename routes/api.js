var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var user = [{user:"fake", password:"fake"}]
  res.status(200).json(user)
});

module.exports = router