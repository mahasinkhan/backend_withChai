const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = 5050;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})