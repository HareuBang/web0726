for(let i=1; i<=9; i++) {
  if(i%2==0)
    continue;
  for(let j=1; j<=9; j++) {
    if(j%2===0)
      continue;

    if((i * j) % 2 === 0)
      continue;
    else
      console.log(`${i} X ${j} = ${i * j}`)
  }
}