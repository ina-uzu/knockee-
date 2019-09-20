var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET product page */
router.get('/product', function(req,res){
  res.render('product');
});

/* GET news page */
router.get('/news', function(req,res){
  res.render('news');
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
