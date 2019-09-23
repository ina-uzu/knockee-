var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET feature page */
router.get('/feature', function(req,res){
  res.render('feature');
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

/* GET privacy policy page */
router.get('/privacypolicy', function(req,res){
  res.render('privacy_policy');
});



module.exports = router;
