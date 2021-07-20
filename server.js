const express       = require('express'),
      dbOperation   = require('./dbFiles/dbOperation'),
      cors          = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

// defining some varaibales for mongoDB
let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api',  async(req, res) => {
  const result = await dbOperation.getEmployees(req.body.name)
  console.log('body: ', result);
  res.send(result.recordset);
})
app.post('/hello', async(req, res) => {
  await dbOperation.createThenGet(req.body)
  const result = await dbOperation.getEmployees(req.body.Firstname)
  console.log('body: ', result);
  res.send(result.recordset);
});

// let Pam = new Employee(1002, 'Pam', 'Beezley', 29, 'Female');
// console.log('*****', Pam.Firstname)
// dbOperation.createThenGet(Pam)
// .then(res => {
//   console.log(res.recordset);
// })
// .catch(err => console.trace(err))

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));