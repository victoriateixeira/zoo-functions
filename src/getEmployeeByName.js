const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
}
module.exports = getEmployeeByName;
