'use strict';
const express = require('express');
const router = express.Router();

router.get('/learn', function (req,res) {
  res.render('learn/index_l.pug');
});

router.get('/learn/list', function (req,res) {
  res.render('learn/list.pug');
});

router.get('/learn/word', function (req,res) {
  res.render('learn/word.pug');
});

module.exports=router;