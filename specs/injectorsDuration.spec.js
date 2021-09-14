describe('injectors duration', () => {
  const injectorsDuration = require('../injectorsDuration.js');

  it('should return the duration of the whole system at maximun capacity when the flux distribution is given', () => {
    expect(
      injectorsDuration(100, {
        A: 100,
        B: 100,
        C: 100,
      })
    ).toBe('infinito');
  });

  it('should ..', () => {
    expect(
      injectorsDuration(140, {
        A: 100,
        B: 100,
        C: 100,
      })
    ).toBe(60);
  });

  it('should ..', () => {
    expect(
      injectorsDuration(170, {
        A: 20,
        B: 50,
        C: 40,
      })
    ).toBe(0);
  });
});
