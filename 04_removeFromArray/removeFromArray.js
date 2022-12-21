const removeFromArray = function (array, ...itemsToRemove) {
  for (const item of itemsToRemove) {
    if (array.includes(item)) {
      const index = array.indexOf(item);
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
