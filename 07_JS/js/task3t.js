// Поиск уникальных элементов массива, включая текстовые значения (медленнее на 25% чем в task2.js)

function findUniq(arr) {
    const preUnic = arr.shift();
    if (arr.includes(preUnic))
      return arr.find((item) => item !== preUnic);
    return preUnic;
}

console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
console.log(findUniq([6, 0, 0, 0, 0])); //6
console.log(findUniq([1, '5', '5','5','5'])); //1
console.log(findUniq(['sept', -7, -7, -7, -7])); //sept

let arr2 = Array(1000000).fill(1)
arr2[50000] = 8
console.log(findUniq(arr2))
console.log(arr2.length)