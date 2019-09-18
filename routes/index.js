var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET team page */
router.get('/team', function(req,res){
  res.render('team');
});

/* GET contact page */
router.get('/contact', function(req,res){
  res.render('contact');
});


module.exports = router;
