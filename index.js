const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.send("Service is healthy ✅");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});