const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species.find((animal) => animal.id === firstAnimal).residents
    .sort((type1, type2) => type2.age - type1.age)[0];
  return Object.values(oldestAnimal);
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
module.exports = getOldestFromFirstSpecies;
