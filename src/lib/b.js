/**
 * @param {number} a
 * @param {number} b
 */
function sum(a, b) {
  return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
function sumWithThreeParam(a, b, c) {
  return a + b + c;
}

/**
 *
 * @param {number} calcResult
 */
function multi(calcResult) {
  return (number) => {
    return number * calcResult;
  }
}

function sumDouble(a, b) {
  return multi(sum(a, b))(2);
}

export {
  sum,
  sumWithThreeParam,
  sumDouble,
};
