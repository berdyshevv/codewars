// original problem here: https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

const findMinimalNum = (arr) => Math.min(...arr);

const add = (accumulator, current) => accumulator + current;

const sumOfMinimums = (arr) => arr.map(findMinimalNum).reduce(add, 0);
