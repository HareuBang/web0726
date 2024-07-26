const array = [1, 3, 5, 7];

for(let idx in array) {
  console.log(idx);
}

for(let val of array) {
  console.log(val)
}

const ob = {
  name: 'kim',
  year: 1998,
  date: 25,
}

for(let key in ob) {
  console.log(key)
}

// for(let err of ob) {
//   console.log(err)
// }