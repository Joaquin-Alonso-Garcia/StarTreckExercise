const lightSpeedRequired = require('./lightSpeedRequired');
const injectorsDuration = require('./injectorsDuration');
const injectorsFluxDistribution = require('./injectorsFluxDistribution');

function spaceShipFunctionality(spaceShipInputs) {
  const velocity = lightSpeedRequired(spaceShipInputs.lightSpeedPercentage);
  const flux = injectorsFluxDistribution(velocity, spaceShipInputs);

  let spaceShipBio = {};

  if (flux == 'unable to comply') {
    spaceShipBio = {
      injectorsFlux: 'unable to comply',
      duration: 0,
    };
    return spaceShipBio;
  }
  // console.log('💰', spaceShipInputs);

  spaceShipBio = {
    A: spaceShipInputs.A === 0 ? 0 : spaceShipInputs.A + flux,
    B: spaceShipInputs.B === 0 ? 0 : spaceShipInputs.B + flux,
    C: spaceShipInputs.C === 0 ? 0 : spaceShipInputs.C + flux,
    duration: injectorsDuration(spaceShipInputs.lightSpeedPercentage, spaceShipInputs),
  };

  // console.log('🎶', spaceShipBio);
  return spaceShipBio;
}
spaceShipFunctionality({ A: 80, B: 50, C: 60, lightSpeedPercentage: 170 });
module.exports = spaceShipFunctionality;
