var express = require('express');
var router = express.Router();
var mongoose =require('mongoose');
var formidable = require("formidable")
var showModel = require('../models/main');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crud' });
});
router.post('/register', function(req,res){
  showModel.create({"t1": req.body.t1,"t2":req.body.t2,"t3":req.body.t3},function(err,result){
  console.log("datacreatd");
  res.redirect('/viewrecord');
});
});
router.get('/viewrecord',function(req,res){
  showModel.find({},function(err,result){
    res.render('view',{"resultdata":result})
  })
})
router.get('/edit', function(req,res){
  var id = mongoose.Types.ObjectId(req.query.id)
  showModel.find({"_id":id}, function(err ,result){
    res.render('edit',{"resultData":result[0]});
   })
})
router.post('/editDetails', function(req,res){
  var id = mongoose.Types.ObjectId(req.body.id)
  var info ={
    "t1":req.body.t1,
    "t2":req.body.t2,
    
  }
  showModel.updateOne({"_id":id},info, function(err, result){
    if(err)
        throw err;
    res.redirect('/viewrecord');
  });
});
router.get('/delete',function(req,res){
  var id = mongoose.Types.ObjectId(req.query.id)
  showModel.deleteOne({"_id":id},function(err,result){
    if (err)
      console.log('not deleted');
    else
      res.redirect('/viewrecord');
  }) 
});

module.exports = router;
