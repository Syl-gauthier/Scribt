'use strict';
const express = require('express');
const router = express.Router();

router.get('/help', function (req,res) {
  res.render('help/index_h.pug');
});

module.exports=router;