const request = require('request');

//inline if statements, check for refactoring

const fetchMyIP = function(callback) {
  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    
    if (error) return callback(error, null); //inline
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching data. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`http://ip-api.com/json/${ip}`, (error, response, body) => {
    
    if (error) return callback(error, null); //inline

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching data. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { lat, lon } = JSON.parse(body);
    callback(null, { lat, lon });
  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.lat}&lon=${coords.lon}`, (error, response, body) => {
    
    if (error) return callback(error, null); //inline

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching data. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const flyOverInfo = JSON.parse(body).response;
    callback(null, flyOverInfo);
  });
};

const nextISSTimesForMyLocation = function(callback) {
  
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }
      fetchISSFlyOverTimes(coords, (error, flyOverInfo) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, flyOverInfo);
      });
    });
  });
};



module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
