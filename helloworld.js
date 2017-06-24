var word;
function say(word){
  console.log(word);
}
function excecute(someFunction,value){
  someFunction(value);
}
excecute(say,"hey");
