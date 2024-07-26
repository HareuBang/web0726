const obj = {
  a : 'hello',
  b : {
    c : 'hi',
    d : { e : 'now'},
  },
};

const{a, b} = obj;
const{c, d} = b;
const {e} = d;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)