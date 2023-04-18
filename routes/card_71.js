var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('card_71/index', {name:'鄭凱鴻' ,id: '207410571' });
});

module.exports = router;
