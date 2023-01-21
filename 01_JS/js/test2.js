// rep - количество каждой буквы в слове

function MultiWord(word, rep) {
  let MyStr = [...word];
  let Result = "";
  MyStr.forEach(function(v){
    for (let r = 0; r < rep; r++) {
      Result = Result + v;
    }
  });
  return Result;
}
console.log(MultiWord("Пример", 2));