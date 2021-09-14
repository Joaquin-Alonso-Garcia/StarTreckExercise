function injectorDamage(damage){
  const injectorNormalFunctionality = 100;
  const injectorFinalCapacity = injectorNormalFunctionality - damage;
  return injectorFinalCapacity;
}
module.exports = injectorDamage;