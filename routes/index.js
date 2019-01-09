var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });

});router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/',function(req,res,next){
 var a=req.body.value1;
const myarray ={
  name:a
  
}
res.render('contact',{msg:myarray});
console.log('hiii')});
module.exports = router;