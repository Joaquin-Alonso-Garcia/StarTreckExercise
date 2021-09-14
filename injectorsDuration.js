const injectorsAvailable = require('./injectorsAvailable.js');
const lightSpeedRequired = require('./lightSpeedRequired.js');
const injectorsFluxDistribution = require('./injectorsFluxDistribution');

function injectorsDuration(lightSpeedRequiredInput, injectorsInput) {
  const lightSpeedRequiredPercentage = lightSpeedRequired(lightSpeedRequiredInput);
  const injectorsFluxDistributionTotal = injectorsFluxDistribution(lightSpeedRequiredPercentage, injectorsInput);
  const maxTimePerformance = 100;

  if (injectorsFluxDistributionTotal == 'unable to comply') {
    return 0;
  }

  const duration = maxTimePerformance - injectorsFluxDistributionTotal;
  if (duration >= 100) {
    return 'infinito';
  }

  return duration;
}

module.exports = injectorsDuration;
