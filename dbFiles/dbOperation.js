const config        = require('./dbConfig'),
      sql           = require('mssql');


const getEmployees = async(firstname) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query(`SELECT * from EmployeeDemographics WHERE Firstname = '${firstname}'`);
    console.log('Employees: ', employees);
    return employees;
  }
  catch (err) {
    console.log(err);
  }
}
const createEmployee = async(Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request()
    .query(`INSERT INTO EmployeeDemographics VALUES
    (${parseInt(Employee.EmployeeID)}, '${Employee.Firstname}', '${Employee.Lastname}', ${parseInt(Employee.Age)}, '${Employee.Gender}')`);
    console.log('Employees: ', Employee);
    return employees;
  }
  catch (err) {
    console.error('Problem in Create Employee', err);
  }
}

const createThenGet = async(Employee) => {
  const newEmployee = await createEmployee(Employee)
  console.log(Employee);
  await getEmployees(Employee.Firstname);
}

module.exports = {
  createThenGet: createThenGet,
  createEmployee: createEmployee,
  getEmployees: getEmployees
}
