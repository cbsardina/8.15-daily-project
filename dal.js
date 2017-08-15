//DAL.js - data access layer

const data = require('./data.js')
const robots = data.users;            //robots is data entry point

function getRobots () {
  return robots;
}

function getRobot (roboName) {
  let pickRobot = {};
  for (let i in robots) {
    if (robots[i].name === roboName) {
      pickRobot = robots[i];
    }
  }
  return pickRobot;
}


let roboLength = data.length;
console.log(roboLength);

// module.exports = {
//
//
// }
