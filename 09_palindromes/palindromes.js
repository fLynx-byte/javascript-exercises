const palindromes = function (str) {
  // Step 1: Clean the string by removing all non-alphanumeric characters and converting it to lowercase
  var cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // Step 2: Reverse the cleaned string
  var reverseStr = cleanStr.split("").reverse().join("");
  // Step 3: Check if the reversed string is the same as the cleaned string
  return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
