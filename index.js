export { capitalize, reverse, calculator, caesarCipher, analyzeArray };

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverse(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => x / y,
  multiply: (x, y) => x * y,
};

function caesarCipher(str, shift = 1) {
  const plain = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cipher = "";
  for (let i = 0; i < str.length; i++) {
    if (plain[plain.indexOf(str[i])] === "z") {
      cipher = cipher + "a";
    } else if (!plain.includes(str[i])) {
      cipher = cipher + str[i];
    } else {
      cipher = cipher + plain[plain.indexOf(str[i]) + shift];
    }
  }
  return cipher;
}

function analyzeArray(arr) {
  const obj = {
    average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length,
    min: arr.reduce((prev, cur) => Math.min(prev, cur)),
    max: arr.reduce((prev, cur) => Math.max(prev, cur)),
    length: arr.length,
  };

  return obj;
}
