const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function includesAnimalsNames() {
  return {
    // NE: species
    //   .filter((animal) => animal.location === 'NE')
    //   .map((animal) => animal.name)
    //   .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
    NE: species
      .filter((animal) => animal.location === 'NE')
      .map((animal) => animal.name)
      .map((animal) => ({ [animal.name]: animal.residents.map((resident) => resident.name) })),
  };
}
console.log(includesAnimalsNames());
function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;
