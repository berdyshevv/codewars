const converterIntoBin = (char) => char < 5 ? '0' : '1'

const func = (str) => 
  str.split('').map(converterIntoBin).join('')
  

console.log(func("45619863"))