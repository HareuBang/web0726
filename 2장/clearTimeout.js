const timerId = null;
let setTime = setTimeout(() => {
  console.log('Hi');
  timerId = setTimeout(setTime, 2000);
  timerId();
}, 2000)

setTimeout(setTime, 2000);