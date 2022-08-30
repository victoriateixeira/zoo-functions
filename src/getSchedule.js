const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getScheduleByAnimal(searchedAnimal) {
  return species.find((animal) => animal.name === searchedAnimal).availability;
}

function getScheduleByDay(day) {
  if (day === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' },
    };
  }
  return {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species
        .filter((animal) => animal.availability.includes(day))
        .map((animal) => animal.name),
    },
  };
}

function getFullSchedule() {
  const fullSchedule = {};
  Object.keys(hours).forEach((day) => {
    if (day === 'Monday') {
      fullSchedule[day] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!' };
    } else {
      fullSchedule[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species
          .filter((animal) => animal.availability.includes(day))
          .map((animal) => animal.name),
      };
    }
  });
  return fullSchedule;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) return getFullSchedule();
  if (Object.keys(hours).includes(scheduleTarget)) return getScheduleByDay(scheduleTarget);
  if (species
    .map((animal) => animal.name)
    .includes(scheduleTarget)) return getScheduleByAnimal(scheduleTarget);
  return getFullSchedule();
}

module.exports = getSchedule;
