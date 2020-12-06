//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

/* fetchMyIP((error, ip) => {
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }
  console.log("Success! Returned IP: ", ip);
});

fetchCoordsByIP('96.54.50.54', (error, coords) => { //...hard coded?
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }
  console.log("Success! Returned longitude and latitude: ", coords);
});

fetchISSFlyOverTimes({ lat: 48.4808, lon: -123.3165 }, (error, passTimes) => { //..hard coded?
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }
  console.log("WOW! Check out the ISS at:", passTimes);
}); */

const printPassTimes = function(flyOverInfo) {
  
  for (const pass of flyOverInfo) {
    
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOverInfo) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(flyOverInfo);
});

