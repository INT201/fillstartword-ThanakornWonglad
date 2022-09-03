const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let str1 = String(startWord)
  let str2 = String(word)

  if (word == null || word == undefined) {
    return 'undefined'
  } else if (str2.substring(0,str1.length) == str1) {
    return word
  } else{
    return str1 + str2
  }
}


module.exports = fillStartWord