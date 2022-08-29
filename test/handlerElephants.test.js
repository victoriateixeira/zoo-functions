const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se o argumento count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se o argumento names retorna um array de nomes que inclui "Jefferson"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('Verifica se o argumento averageAge retorna um numero proximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Verifica se a funcao retorna undefined quando nenhum parametro é passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se a funcao retorna "Parâmetro inválido, é necessário uma string" quando o tipo do parametro passado é diferente de string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se a funcao retorna "null" quando o parametro passado é "age"', () => {
    expect(handlerElephants('age')).toBe(null);
  });
  it('Verifica se a funcao retorna o valor esperado quando o parametro passado é uma chave válida do objeto "elephants"', () => {
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
