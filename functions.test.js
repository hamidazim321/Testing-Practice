const { reverseString, stringLength, Calculator, capitalize } = require("./functions");

describe("stringLength", () => {
  describe("Valid Input and Output", () => {
    test("Hamid has 5 chars", () => {
      expect(stringLength("Hamid")).toBe(5);
    });
  });
  describe("Invalid Input, Function throws error", () => {
    test("String must be between 1 and 10 characters", () => {
      expect(() => stringLength("12345678910")).toThrow(
        "String must be between 1 and 10 characters"
      );
    });

    test("String must be between 1 and 10 characters", () => {
      expect(() => stringLength("12345678910")).toThrow(Error);
    });
  });
});

describe('reverseString', ()=>{
  test("Reverse of Hamid is midaH", () => {
    expect(reverseString("Hamid")).toBe("dimaH");
  });
})

describe('Calculator', ()=>{
  test('3 + 5 = 8', () => {
    expect(Calculator.add(3,5)).toBe(8)
  })

  test('3 x 5 = 15', () => {
    expect(Calculator.multiply(3,5)).toBe(15)
  })

  test('15/3 = 5', () => {
    expect(Calculator.divide(15,3)).toBe(5)
  })
})

describe('capitalize', () => {
  test('hamid capitalized is HAMID', () => {
    expect(capitalize('hamid')).toBe('HAMID')
  })
})
