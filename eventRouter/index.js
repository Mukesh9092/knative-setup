const express = require('express');
const eventRouter = require('./aws/lambda/common/src/eventRouterLambda');
const app = express();

app.get('/', (req, res) => {
  eventRouter.handler();
  const target = process.env.TARGET;
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('sftp listening on port', port);
});
