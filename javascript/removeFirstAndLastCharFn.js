const array = (str) => {
  let arr = str.split(",")
  if (arr.length <= 2){
    return null;
  } else {
  return arr
    .filter((el, index, arr) =>
      index !== 0 && index !== arr.length - 1
      )
    .join(" ")
  }
}

console.log(array("first,6a4"))