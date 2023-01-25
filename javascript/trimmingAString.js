const sizeLessThanThree = (size, strLength) => size <= 3 && strLength > size;

const verySmallConcat = (str, size) => `${str.slice(0, size)}...`;

const sizeNormal = (size, strLength) => strLength > 3 && strLength > size;

const normalConcat = (str, size) => `${str.slice(0, size - 3)}...` 

function trim(str, size) {
  let strLength = str.length;
  
  if (sizeLessThanThree(size, strLength)) {
    return verySmallConcat(str, size);
  } 
  if (sizeNormal(size, strLength)) {
    return normalConcat(str, size);
  }
  return str;
}
	
console.log(trim("012345", 3));