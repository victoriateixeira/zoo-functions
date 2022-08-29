const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageDistribution = {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
  return ageDistribution;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const entrantsByAge = countEntrants(entrants);
  return Object.keys(entrantsByAge)
    .reduce((acc, curr) => acc + (entrantsByAge[curr] * prices[curr]), 0);
}
console.log(calculateEntry({}));
module.exports = { calculateEntry, countEntrants };
