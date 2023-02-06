function pairZeros(arr) {
  let shouldAdd = true;
  let acc = []
  
  for (const el of arr){
    if (el !== 0) {
      acc.push(el);
    } else {
      if (shouldAdd === true) {
        acc.push(el);
      }
      shouldAdd = !shouldAdd;
    } 
  }
  
  return acc;
}