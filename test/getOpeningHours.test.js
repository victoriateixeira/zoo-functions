const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa a função que não recebe parâmetros ', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se a função retorna "The zoo is closed" quando recebe os parâmetros "Monday" e "09:00-AM" ', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Testa se a função retorna "The zoo is open" quando recebe os parâmetros "Tuesday" e "09:00-AM" ', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Testa se a função retorna "The zoo is open" quando recebe os parâmetros "Wednesday" e "09:00-P " ', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Testa se a função aciona o erro "The day must be valid. Example: Monday" quando recebe um parâmetro que não é um dia válido', () => {
    expect(() => (getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday'));
  });
  it('Testa se a função aciona o erro "The hour must be between 0 and 12" quando recebe um parâmetro que não é uma hora válido', () => {
    expect(() => (getOpeningHours('Tuesday', '13:00-AM')).toThrow('The hour must be between 0 and 12'));
    expect(() => (getOpeningHours('Tuesday', '-10:00-AM')).toThrow('The hour must be between 0 and 12'));
  });
  it('Testa se a função aciona o erro "The minutes must be between 0 and 59" quando recebe um parâmetro que não é um minuto válido', () => {
    expect(() => (getOpeningHours('Tuesday', '09:63-AM')).toThrow('The minutes must be between 0 and 59'));
    expect(() => (getOpeningHours('Tuesday', '09:-15-AM')).toThrow('The minutes must be between 0 and 59'));
  });
  it('Testa se a função aciona o erro "The abbreviation must be AM or PM" quando recebe um parâmetro que não é uma abreviação válida', () => {
    expect(() => (getOpeningHours('Tuesday', '09:10-RM')).toThrow('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Testa se a função aciona o erro "The hour should represent a number" quando recebe um parâmetro de hora que não é um número', () => {
    expect(() => (getOpeningHours('Tuesday', 'C9:10-AM')).toThrow('The hour should represent a number'));
  });
  it('Testa se a função aciona o erro "The minutes should represent a number" quando recebe um parâmetro de minutos que não é um número', () => {
    expect(() => (getOpeningHours('Tuesday', '09:co-AM')).toThrow('The minutes should represent a number'));
  });
});
