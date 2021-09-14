describe('injectorsAvailable', () => {
  const injectorsAvailable = require('../injectorsAvailable.js');

  it('should return the number of injectors available', () => {
    const injectors = {
      A: 100,
      B: 100,
      C: 100,
    };

    expect(injectorsAvailable(injectors)).toBe(3);
  });
});
