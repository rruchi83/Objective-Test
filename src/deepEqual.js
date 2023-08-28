const deepEqual = (a, b) => {
  //return false;
  const isEqual = (valueA, valueB) => {
    if (valueA === null || valueA === undefined) {
        return valueB === null || valueB === undefined;
    }
    if (valueB === null || valueB === undefined) {
        return false;
    }
    return valueA === valueB;
  };
  
  if (typeof a !== 'object' || typeof b !== 'object' || a === null || b===null) {
    return isEqual(a, b);
  }

 
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  
  for (const key of keysA) {
       console.log('test'+keysA);
    if (!isEqual(a[key], b[key])) {
        return false;
    }
  }
 
  return true;
}
module.exports = deepEqual;





