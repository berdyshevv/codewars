const converterIntoBin = (char) => char < 5 ? '0' : '1'

const fakeBin = (number) => {
  let result = "";
  for(let i = 0; i < number.length; i++){
    result += converterIntoBin(number.charAt(i))
  }

  return result;
}

console.log(fakeBin("5363837474"))