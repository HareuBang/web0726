let a = 'b';
const b = ['d', true, 1];
const c = {g : 'h'};
const d = [{j : 'k'}, {l : 'm'}];
const e = { o : {p : 'q'}};

const f = a;
const g = [...b];
const i = JSON.parse(JSON.stringify(d));
const j = JSON.parse(JSON.stringify(e));

a = 'a';
b[1] = false;
d[0].j = 'p';
e.o.p = 'l';

console.log(f)
console.log(g)
console.log(i)
console.log(j)

const cCopy = {...c};
c.g = 'g';
console.log(cCopy);