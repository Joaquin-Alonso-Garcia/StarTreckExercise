describe('injectorsFluxDistribution', () => {
  const injectorsFluxDistribution = require('../injectorsFluxDistribution.js');

  it('should return the flux distribution among all of the available injectors', () => {
    const injectors = {
      A: 100,
      B: 100,
      C: 100,
    };

    expect(injectorsFluxDistribution(450, injectors)).toBe(50);
    expect(injectorsFluxDistribution(270, injectors)).toBe(-10);
  });
});
