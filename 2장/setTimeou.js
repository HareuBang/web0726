const callback = () => {
  console.log('2초마다 실행');
  setTimeout(callback, 2000);
}

callback();
// setTimeout(callback, 2000);