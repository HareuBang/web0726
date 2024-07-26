const zerocho = {
  name: {
    first: '현영',
    last: '조',
  },
  gender: 'm',
};

zerocho.name.last = '김'
console.log(zerocho)

// 1.
const family = [
  { name: '제로초', age: 29, gender: '남'},
  { name: '레오', age: 5, gender: '남'},
  { name: '체리', age: 3, gender: '여'},
];

console.log(family.name);
console.log(family[1].age);

// 2.
console.log(`?.` + family[0]?.name);
// family[0]?.name = '조현영';
console.log(family[0]);