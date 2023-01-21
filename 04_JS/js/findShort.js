// task. Поиск кратчайшего слова.

function minWordLength(strCompare) {
  let words = strCompare.split(" ");
  let lengthWords = [];
  lengthWords = words.map(function (e) {
    return e.length;
  });
  const minLength = Math.min(...lengthWords);
  return minLength;
}

console.log(
  minWordLength("bitcoin take over the world maybe who knows perhaps")
);
console.log(minWordLength("Let's travel abroad shall we"));
console.log(minWordLength("рак за руку Греку цап!"));
