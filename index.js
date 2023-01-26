// Write a function that returns true if the input string has the exact same number of occurrences otherwise return false.
// test cases:
// "aabbccdd" --> true
// "abc" ---> true
// "abcdd" ---> false
// "hhhhheeeeeolllllo" ----> false

function sames(str){
let count = 0
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[0]){
      count++
    }}
  for (let j = 0; j < str.length; j++){
    let found = 0
  for (let k = 0; k < str.length; k++){
    if (str[j] === str[k]){
      found++
    }
  }
    if (found !== count){
      return false
    }
  }
  return true
}



console.log(sames('hhhhheeeeeolllllo'))