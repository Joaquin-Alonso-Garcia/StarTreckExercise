describe('light speed flux required', () => {
  const lightSpeedRequired = require('../lightSpeedRequired.js');

  it('should return the flux of the speed when a percentage of it is given', () => {
    expect(lightSpeedRequired(100)).toBe(300);
    expect(lightSpeedRequired(150)).toBe(450);
    expect(lightSpeedRequired(90)).toBe(270);
  });
});
