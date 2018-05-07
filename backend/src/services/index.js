const pilots = require('./pilots/pilots.service.js');
const races = require('./races/races.service.js');
const tracks = require('./tracks/tracks.service.js');
const devices = require('./devices/devices.service.js');
const racecontrol = require('./racecontrol/racecontrol.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pilots);
  app.configure(races);
  app.configure(tracks);
  app.configure(devices);
  app.configure(racecontrol);
};
