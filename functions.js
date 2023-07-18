function stringLength(string){
  const len = string.split("").length
  if (len > 0 && len < 10){
    return len
  }
  else {
    throw new Error('String must be between 1 and 10 characters')
  }
}

function reverseString(string){
  return string.split("").reverse().join("")
}

Calculator = {
  add(num1, num2){
    return num1 + num2
  },

  multiply(num1, num2){
    return num1 * num2
  },

  divide(num1, num2){
    return num1 / num2
  }

}

function capitalize(){}

module.exports = {stringLength, reverseString, Calculator, capitalize}

