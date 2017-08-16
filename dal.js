//DAL.js - data access layer

const data = require('./data.js')
const robots = data.users;            //robots is data entry point


function getRobots () {
  return robots;
}

let idCheck = robots[0].id;
console.log("Should be 1");  //this returns 1 which should work
console.log(idCheck);       //problem seems to be with oneRobot
                            //in server.js
function getRobot (roboId) {
  let oneRobot = {};
  for (let i = 1; i < robots.length; i++) {
    if (robots[i].id === roboId) {
      oneRobot = robots[i];
    }
  }
  return oneRobot
}

module.exports = {
  getRobots: getRobots,
  getRobot: getRobot
}
