'use strict';
const express = require('express');
const router = express.Router();

router.get('/', function (req,res) {
  res.render('general/home.pug');
});

router.get('/home', function (req,res) {
  res.redirect('/');
});

module.exports=router;