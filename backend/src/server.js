const express = require('express');

const app = express();

//GET, POST, PUT, DELETE
// req.query = Access query parameters
app.get('/users', (req, res) => {
  return res.json({ age: req.query.age });
});

app.listen(3333)
