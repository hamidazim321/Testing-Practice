const stringLength = require('./functions')

test('Hamid has 5 chars', ()=>{
  expect(stringLength('Hamid')).toBe(5)
})