function array(arr){
  let acc = "";

  for (let i = 0; i < arr.length; i++){
    if (arr[i] === ",") {
      acc += " "
    }
    else if (i === 0) {}
    else if (i === arr.length - 1){}
    else {
      acc += arr[i]
    }
  }

  if (acc.length = 0){
    return null;
  }
  return acc;
}
console.log(`"${array("0,1,3,4,5")}"`)












