function lightSpeedRequired(percentage){
  const lightSpeed = 300;
  const injectorNormalFunctionality = 100;
  const lightSpeedNeeded = (percentage * lightSpeed)/injectorNormalFunctionality;
  return lightSpeedNeeded;
}

module.exports = lightSpeedRequired;