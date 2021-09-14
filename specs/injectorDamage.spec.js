describe('injector damage', () => {
  const injectorDamage = require('../injectorDamage.js');
  
  it('should return the injector flux capacity when a damage percentage is given', () => {
    expect(injectorDamage(30)).toBe(70);
    expect(injectorDamage(0)).toBe(100);
  });
});