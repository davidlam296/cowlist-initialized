const express = require('express')
const { Cows } = require('./db.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(express.static('./client/dist'));
app.use(cors());

app.get('/cows', (req, res) => {
  Cows.findAll().then(cowData => {
    const parsedCows = cowData.reduce((cows, cow) => {
      cows.push({
        name: cow.name,
        description: cow.description
      })
      return cows;
    }, []);

    res.status(200).send(parsedCows);
  }).catch(err => {
    console.log('Error', err);
    res.sendStatus(500);
  });
});

app.post('/cows', (req, res) => {
  if (req.body.name === '' || req.body.description === '') {
    res.sendStatus(400);
  } else {
    Cows.create({
      name: req.body.name,
      description: req.body.description
    }).then(() => {
      res.sendStatus(201);
    }).catch(err => {
      console.log('Error', err);
      res.sendStatus(500);
    })
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))