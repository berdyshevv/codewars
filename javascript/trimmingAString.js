function trim(str, size) {
  let strLength = str.length;
  let str2 = str.slice(0, size);
  let str3 = str2.concat("...")
  if(strLength > size && size > 3) {
    return str3;
  } else if (size <= 3 && strLength > size) {
    str2 = str.slice(0, size);
    return str3;
  }
  return str2 ;
}
