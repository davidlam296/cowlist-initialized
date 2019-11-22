const router = require('express').Router();
const { Cows } = require('../db/index.js');

router.get('/cows', (req, res) => {
  res.sendStatus(200);
})

router.post('/cows', (req, res) => {
  console.log(req.body);
  Cows.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    })
})

router.delete('/cows', (req, res) => {
  res.sendStatus(200);
})

router.put('/cows', (req, res) => {
  res.sendStatus(200);
})

module.exports = router;