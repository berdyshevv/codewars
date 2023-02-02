const digitSum = (n) =>  n
    .toString()
    .split('')
    .map(el => Number(el))
    .reduce((partialSum, a) => partialSum + a, 0);

const reverseNumber = (n) =>  Number(n
    .toString()
    .split('')
    .reverse()
    .reduce((partialSum, a) => partialSum + a, ''));


function numberJoy(n) {
  let firstNum = digitSum(n);
  let secondNum = reverseNumber(firstNum);
  
  if (firstNum * secondNum === n) {
    return true;
  }
  return false;
}