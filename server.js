const express       = require('express'),
      Employee     = require('./dbFiles/employee'),
      dbOperation   = require('./dbFiles/dbOperation'),
      cors          = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// // defining some varaibales for mongoDB
// let client;
// let session;
// app.use(cors());

// app.get('/api', function (req, res) {
//   console.log('called');
//   res.send({result: 'go away'});
// })
// app.get('/hello', function (req, res) {
//   console.log('called');
//   res.send({result: 'OMG HI'});
// });

// let Pam = new Employee(1002, 'Pam', 'Beezley', 29, 'Female');
// console.log('*****', Pam.Firstname)
// dbOperation.createThenGet(Pam)
// .then(res => {
//   console.log(res.recordset);
// })
// .catch(err => console.trace(err))

dbOperation.getEmployees().then(res => {
  console.log(res.recordset);
});

// app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));