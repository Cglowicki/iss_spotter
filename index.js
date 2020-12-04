const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }

  console.log("Success! Returned IP: ", ip);
});

fetchCoordsByIP('184.151.230.3', (error, latLon) => {
  if (error) {
    console.log("Hmm, something's not right...", error);
    return;
  }

  console.log("Success! Returned longitude and latitude: ", latLon);
});