const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  console.log(startWord + word)
  if (word == null || word == undefined ) {
    console.log('undefined')
  }else if (word[0,3]=startWord){
    console.log(word)
  }

}
module.exports = fillStartWord