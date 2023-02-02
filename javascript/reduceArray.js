const reduceArray = (array) => {
  acc = [1];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      acc[acc.length - 1] += 1;
      console.log(acc)
    } else {
      acc.push(1)
    }
  }
  return acc;
}

const setReducer = (input) => {
  let result = input;
  while (result.length !== 1) {
    result = reduceArray(result);
  }
  return result[0];
  
}