const sizeLessThanThree = (size, strLength) => strLength <= 3 && strLength > size;

const verySmallConcat = (str: string, size: number) => `${str.slice(0, size)}...`;

const sizeNormal = (size: number, strLength: string) => strLength > 3 && strLength > size;

const normalConcat = (size, str) => `${str.slice(0, size - 3)}...` 

function trim(str: string, size: number) {
  let strLength = str.length;
  
  if (sizeLessThanThree(size, strLength)) {
    return verySmallConcat(str, size);
  } else if (sizeNormal(size, strLength)) {
    return normalConcat(str, size);
  }
  
  return str;
}
	
console.log(trim("012345", 1));