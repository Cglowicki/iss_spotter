//const { fetchMyIP } = require('./iss_promised');
//const { fetchCoordsByIP } = require('./iss_promised');
//const { fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

//translate flyover info
const printPassTimes = function(flyOverInfo) {
  
  for (const pass of flyOverInfo) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((flyOverInfo) => {
    printPassTimes(flyOverInfo);
  })
  .catch((error) => {
    console.log('Hmm... Something\'s not right: ', error.message);
  });

/* fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(nextISSTimesForMyLocation)
  .then(body => console.log('Success!', body)); */