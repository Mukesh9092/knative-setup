const express = require('express');
const mc10MetricsIngester = require('./aws/lambda/mc10/src/metricsIngesterLambda');
const app = express();

app.get('/', (req, res) => {
  mc10MetricsIngester.handler();
  const target = process.env.TARGET;
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('mc10MetricsIngester listening on port', port);
});
