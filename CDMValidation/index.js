const express = require('express');
const cdmValidation = require('./aws/lambda/src/firehoseProcessor');
const app = express();

app.get('/', (req, res) => {
  cdmValidation.handler();
  const target = process.env.TARGET;
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('cdmValidation listening on port', port);
});
