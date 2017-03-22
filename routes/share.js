'use strict';
const express = require('express');
const router = express.Router();

router.get('/share', function (req,res) {
  res.render('share/index_s.pug');
});

router.get('/share/profil*', function (req,res) {
  res.render('share/profil.pug');
});

module.exports=router;