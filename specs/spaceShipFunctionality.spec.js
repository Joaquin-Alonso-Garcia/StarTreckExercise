const spaceShipFunctionality = require('../spaceShipFunctionality.js');

describe('spaceShipFunctionality', () => {
  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 100,
      B: 100,
      C: 100,
      lightSpeedPercentage: 100,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toEqual({
      A: 100,
      B: 100,
      C: 100,
      duration: 'infinito',
    });
  });

  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 100,
      B: 100,
      C: 100,
      lightSpeedPercentage: 90,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toEqual({
      A: 90,
      B: 90,
      C: 90,
      duration: 'infinito',
    });
  });

  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 100,
      B: 100,
      C: 100,
      lightSpeedPercentage: 30,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toEqual({
      A: 30,
      B: 30,
      C: 30,
      duration: 'infinito',
    });
  });

  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 80,
      B: 90,
      C: 100,
      lightSpeedPercentage: 100,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toEqual({
      A: 90,
      B: 100,
      C: 110,
      duration: 90,
    });
  });

  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 100,
      B: 100,
      C: 0,
      lightSpeedPercentage: 80,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toEqual({
      A: 120,
      B: 120,
      C: 0,
      duration: 80,
    });
  });

  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 100,
      B: 100,
      C: 100,
      lightSpeedPercentage: 150,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toEqual({
      A: 150,
      B: 150,
      C: 150,
      duration: 50,
    });
  });

  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 100,
      B: 100,
      C: 70,
      lightSpeedPercentage: 140,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toEqual({
      A: 150,
      B: 150,
      C: 120,
      duration: 50,
    });
  });

  it('should return the flux of each injector and the time that requires the test', () => {
    const spaceShipInputs = {
      A: 80,
      B: 50,
      C: 60,
      lightSpeedPercentage: 170,
    };
    expect(spaceShipFunctionality(spaceShipInputs)).toStrictEqual({
      injectorsFlux: 'unable to comply',
      duration: 0,
    });
  });
});
