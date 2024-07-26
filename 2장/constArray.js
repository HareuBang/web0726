const target = ['a', 'b', 'c', 'd', 'e'];

// Error
// target = 'h';

target[0] = [1, 2];
console.log(target);

const temp = 12;
target[3] = temp;
console.log(target);

console.log(target.shift())
console.log(target)