const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }

  console.log("Success! Returned IP: ", ip);
});

fetchCoordsByIP('184.151.230.3', (error, coords) => {
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }

  console.log("Success! Returned longitude and latitude: ", coords);
});

fetchISSFlyOverTimes({ lat: 49.261, lon: -123.04 }, (error, passTimes) => {
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }

  console.log("WOW! Check out the ISS at:", passTimes);
});