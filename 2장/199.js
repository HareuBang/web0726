const setInt = setTimeout(() => {
  console.log('hello')
  setTimeout(setInt(), 1000);
},1000)