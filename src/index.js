module.exports = function solveEquation(equation) {
  const arr = equation.split(' ');

  const [a, b, c] = [arr[0], parseFloat(arr[3] + arr[4]), parseFloat(arr[7] + arr[8])];

  const D = Math.pow(b, 2) - 4 * a * c;

  const result1 = (-b + Math.sqrt(D)) / (2 * a);
  const result2 = (-b - Math.sqrt(D)) / (2 * a);

  const resultArr = [Math.round(result1), Math.round(result2)];

  return resultArr.sort( (a, b) => a - b );
  

} 
