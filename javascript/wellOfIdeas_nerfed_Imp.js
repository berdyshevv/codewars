function well(x){
  let counter = 0;
  for(let i = 0;i < x.length;i++){
    if(x[i] === 'good'){
      counter++;
    }
    else{
      counter += 0;
    }
  }
  if(counter === 0){
    return 'Fail!';
  }
  else if(counter === 1 || counter === 2){
    return 'Publish!'
  }
  else if(counter > 2){
    return 'I smell a series!';
  }
}


console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));