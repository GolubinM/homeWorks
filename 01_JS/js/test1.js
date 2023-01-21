function MultiWord(rep){
// let rep = 2;
let MyStr = "БольшойТекст";
let Result = "";
for (a of MyStr) {
  for (let r = 1; r<rep; r++) {
    a = a + a;
  }
  Result = Result + a;
}
return(Result);
}
// console.log(Result, a);

console.log(MultiWord(5))
