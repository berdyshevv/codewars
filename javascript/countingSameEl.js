const counterOfSameElements = (array) => {
  // create object
  let counter = {}
  // fill object by intereating array
  for(let i = 0; i < array.length; i++){
    counter[array[i]] = 
      counter[array[i]] === undefined
      ? 1
      : counter[array[i]] += 1
  }
  
  // return object
  return counter;
}
console.log(counterOfSameElements(["Viktua", "Tim", "Viktua"]))

// const counterOfSameElements = (array) => {
//   // create object
//   const counter = {}
//   // fill object by intereating array
//   for(let i = 0; i < array.length; i++){
//     if ( counter[array[i]] === undefined ) {
//       counter[array[i]] = 1;
//     }
//     else {
//       counter[array[i]] += 1;
//     }
//   }
  
//   // return object
//   return counter;
// }