const sumItems = function(array) {
  // Sum all the numbers in the array
  let sum = 0;

  for (const num of array) {
    if (!Array.isArray(num)) {
      sum += num;
    } else {
      sum += sumItems(num);
    }
  }
  return sum;
};

module.exports = sumItems;