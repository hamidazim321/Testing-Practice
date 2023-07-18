module.exports = function stringLength(string){
  const len = string.split("").length
  if (len > 0 && len < 10){
    return len
  }
  else {
    throw new Error('String must be between 1 and 10 characters')
  }
}



