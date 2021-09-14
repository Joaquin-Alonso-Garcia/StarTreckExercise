const injectorsAvailable = require('./injectorsAvailable');

function injectorsFluxDistribution(lightSpeedNeeded, injectors) {
  const injectorsTotalPercentage = injectors.A + injectors.B + injectors.C;
  const totalInjectorsAvailable = injectorsAvailable(injectors);
  const flux = (lightSpeedNeeded - injectorsTotalPercentage) / totalInjectorsAvailable;
  if (flux > 100) {
    return 'unable to comply';
  }
  return flux;
}

module.exports = injectorsFluxDistribution;
