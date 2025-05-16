const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world, mon premier serveur Express!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

app.get('/about', (req, res) => {
    res.send('Page à propos');
  });
  