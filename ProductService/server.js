const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello from Service Product!');
});

app.listen(port, () => {
  console.log(`Service Product listening at http://localhost:${port}`);
});
