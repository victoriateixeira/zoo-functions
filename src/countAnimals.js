const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = {};
    species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });
    return allAnimals;
  }
  if (animal.sex === undefined) {
    return species.find((element) => element.name === animal.specie).residents.length;
  }
  const searchedAnimal = species.find((element) => element.name === animal.specie);
  return searchedAnimal.residents.filter((resident) => resident.sex === animal.sex).length;
  // return searchedAnimal.residents.length;
}
console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
