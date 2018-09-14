module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  let resultsArr = [];
  let X1;
  let X2;
  let D;
  if(arr[7] == "-") {
    arr[8] = -arr[8]
  }
  D = arr[4] * arr[4] - 4 * arr[0] * arr[8];
  if ( D < 0 ) {
    D = -Math.sqrt(Math.abs(D));
    if (arr[3] == "-") { 
      X1 = Math.round((+arr[4] + Math.round(D)) / (2 * arr[0])  );
      X2 = Math.round((+arr[4] - Math.round(D)) / (2 * arr[0])  );
    } else {
      X1 = Math.round((-arr[4] + Math.round(D)) / (2 * arr[0]) );
      X2 = Math.round((-arr[4] - Math.round(D)) / (2 * arr[0]) );
    }
  } else {
    if (arr[3] == "-") {
      X1 = Math.round((+arr[4] + Math.round(Math.sqrt(D))) / (2 * arr[0]) );
      X2 = Math.round((+arr[4] - Math.round(Math.sqrt(D))) / (2 * arr[0]) );
    } else{
      X1 = Math.round((-arr[4] + Math.round(Math.sqrt(D))) / (2 * arr[0]) );
      X2 = Math.round((-arr[4] - Math.round(Math.sqrt(D))) / (2 * arr[0]) );
      }
    }
  resultsArr.push(X1, X2);
  resultsArr.sort(function(a, b){
    return a - b;
  });
  
  return resultsArr;
} 
