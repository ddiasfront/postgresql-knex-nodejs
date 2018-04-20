const express = require('express');

const queries = require('../db/queries')

const router = express.Router();

router.get('/', (req, res) => {
  queries.getAll().then(bahia => {
    res.json({ bahia })
  })
})

module.exports = router