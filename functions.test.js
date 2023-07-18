const stringLength = require('./functions')

test('Hamid has 5 chars', ()=>{
  expect(stringLength('Hamid')).toBe(5)
})

test('String must be between 1 and 10 characters', () => {
  expect(() => stringLength('12345678910')).toThrow('String must be between 1 and 10 characters');
});

test('String must be between 1 and 10 characters', () => {
  expect(() => stringLength('12345678910')).toThrow(Error);
});