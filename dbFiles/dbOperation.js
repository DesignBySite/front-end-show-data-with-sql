const config        = require('./dbConfig'),
      sql           = require('mssql');


const getEmployees = async() => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request().query("SELECT * from EmployeeDemographics");
    // console.log('Employees: ', employees);
    return employees;
  }
  catch (err) {
    console.log(err);
  }
}
const createEmployee = async(Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = pool.request()
    .query(`INSERT INTO EmployeeDemographics VALUES
    (${Employee.EmployeeID}, '${Employee.Firstname}', '${Employee.Lastname}', ${Employee.Age}, '${Employee.Gender}')`);
    // console.log('Employees: ', employees);
    return employees;
  }
  catch (err) {
    console.error('Problem in Create Employee', err);
  }
}

const createThenGet = async(Employee) => {
  await createEmployee(Employee)
  await getEmployees();
}

module.exports = {
  createThenGet: createThenGet,
  createEmployee: createEmployee,
  getEmployees: getEmployees
}
