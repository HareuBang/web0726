const filter = (array, callback) => {
  let answer = [];
  for(let i=0; i<array.length; i++){
    if(callback(array[i], i))
      answer.push(array[i])
  }
  return answer;
};

console.log(filter([1, 3, 5, 7], (v, i) => v > 1));