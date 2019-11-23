const router = require('express').Router();
const { Cows } = require('../db/index.js');

router.get('/cows', (req, res) => {
  Cows.find()
    .then(cows => {
      res.status(200).json(cows)
    })
    .catch(err => {
      console.log('Error ', err)
      res.sendStatus(500);
    })
})

router.post('/cows', (req, res) => {
  Cows.findOneAndReplace({
    name: req.body.name
  }, req.body, {upsert: true}).exec()
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log('Error ', err);
      res.sendStatus(500);
    })
})

router.delete('/cows', (req, res) => {
  Cows.deleteOne(req.query)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(500);
    })
})

router.put('/cows', (req, res) => {
  Cows.findOneAndUpdate({
    _id: req.body._id
  }, req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.sendStatus(500);
    })
})

module.exports = router;