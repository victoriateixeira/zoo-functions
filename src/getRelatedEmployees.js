const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';

function isManager(id) {
  const searchedEmployee = employees.find((employee) => employee.id === id);
  return searchedEmployee.managers.length === 0 || searchedEmployee.managers.includes(stephanieId);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((employee) => employee.managers
    .includes(managerId))
    .map((employee) => `${employee.firstName} ${employee.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
