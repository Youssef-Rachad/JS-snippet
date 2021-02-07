/*
Daily Coding Problem: Problem #27
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
done on 06/02/2021
*/
function solution(word){
let open=[];  
for(letter of word){
    if (letter.match(/(\{|\(|\[)/) != null){
      open.push(letter);
    }else if (letter.match(/(\}|\)|\])/) != null && open[open.length-1] == {"}":"{",")":"(","]":"["}[letter]){
      open.pop();
    }else{      
//console.log(`Error: failed at character '${letter}'\nMatched '${{"}":"{",")":"(","]":"["}[letter]}' against '${open[open.length-1]}'\nCurrent stack: ${open}`);
return false;
    }
  }
if (open.length != 0){
  //console.log(`Error: incomplete braces\nCurrent stack: ${open}`);
return false;
}else{
  return true;
}}
