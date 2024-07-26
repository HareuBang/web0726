// Reference , Copy

const array = [ {j : 'k'}, {l: 'm'} ];

let rcArray = array;

array[1].l = 'p';
console.log(`array[1].l = 'p' => rcArray ${rcArray[1].l}`);
// array.push({u: 'u'});
// console.log(`array = ${array} shallow = ${rcArray}`)

const shallow = [...array];
array[0].j = 'j';
console.log(`array[0].j = 'j' => rcArray ${shallow[0].j}`);

array.push({u: 'u'});
console.log(`array = ${array} shallow = ${shallow}`)

let arr = [1, 2, 3];
let copyArr = [...arr];

arr.push(5);
console.log(copyArr)

//
let ob = {
  name: '1',
  year: '2',
  date: '3',
}
ob.length = 5;

console.log(ob);