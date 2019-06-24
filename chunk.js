const chunkArray = (arr, len) => {
  // Init chunked arr
  const chunkkedArr = [];

  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkkedArr[chunkkedArr.length - 1];

    // Check if last and if last length is equal to the chunk length
    if (!last || last.length === len) {
      chunkkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkkedArr;
};

module.exports = chunkArray;
