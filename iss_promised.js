const request = require('request-promise-native');

//retrieve IP
const fetchMyIP = function() {
  return request(`https://api.ipify.org?format=json`);
};
//IP retrieved

//retrieve coords by IP
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ip-api.com/json/${ip}`);
};
//coords retirieved

//retrieve fly over times by coords
const fetchISSFlyOverTimes = function(body) {
  const { lat, lon } = JSON.parse(body);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}`;
  return request(url);
};
//fly over times retrieved

//call all the functions in one go!
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = {/* fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, */ nextISSTimesForMyLocation };