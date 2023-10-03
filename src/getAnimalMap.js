const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function includesAnimalsNames() {
  return {
    NE: species
      .filter((animal) => animal.location === 'NE')
      .map((animal) => ({ [animal.name]: species
        .find((chosenAnimal) => chosenAnimal === animal).residents
        .map((resident) => resident.name) })),
  };
}
console.log(includesAnimalsNames());
function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;
