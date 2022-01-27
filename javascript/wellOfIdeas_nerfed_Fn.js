const well = (givenArray) => {
  let count = givenArray.filter(givenArray => givenArray === 'good').length;
  if(count === 0)
    return 'Fail!'
  if(count <= 2)
    return 'Publish!'
  if(count > 2)
    return 'I smell a series!'
}


console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));