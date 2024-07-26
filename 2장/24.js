const array = [null, 'hello', null, undefined, false];

console.log(array.some(e => e !== null))

for(let e of array) {
  if(e === null){
    console.log(true);
    break;
  }

  console.log(`break문 확인`);
}