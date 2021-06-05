const express       = require('express'),
      cors          = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

// defining some varaibales for mongoDB
let client;
let session;
app.use(cors());

app.get('/api', function (req, res) {
  console.log('called');
  res.send({result: 'go away'});
});
app.get('/hello', function (req, res) {
  console.log('called');
  res.send({result: 'OMG HI'});
});

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));