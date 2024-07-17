const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Service User!!');
});

app.listen(port, () => {
  console.log(`Service User listening at http://localhost:${port}`);
});