const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(id) {
  const animalsResponsibleFor = employees.find((employee) => employee.id === id).responsibleFor;
  const animalNames = [];
  animalsResponsibleFor.forEach((animalID) => {
    animalNames.push(species.find((specie) => specie.id === animalID).name);
  });
  return animalNames;
}

function getLocations(id) {
  const animalsResponsibleFor = employees.find((employee) => employee.id === id).responsibleFor;
  const animalLocations = [];
  animalsResponsibleFor.forEach((animalLoc) => {
    animalLocations.push(species.find((specie) => specie.id === animalLoc).location);
  });
  return animalLocations;
}
function noParameters() {
  return employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee.id),
    locations: getLocations(employee.id),
  }));
}

function getEmployeesCoverage(info) {
  if (info === undefined) return noParameters();
  const searchedEmployee = employees.find((employee) => Object.values(employee)
    .includes(Object.values(info)[0]));
  if (searchedEmployee) {
    return {
      id: searchedEmployee.id,
      fullName: `${searchedEmployee.firstName} ${searchedEmployee.lastName}`,
      species: getSpecies(searchedEmployee.id),
      locations: getLocations(searchedEmployee.id),
    };
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
