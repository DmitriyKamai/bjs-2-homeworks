function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber;
  }, 0);
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;  
  };
  let sum = arr.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;  
  };
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;  
  };
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    };
  };
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;  
  };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    };
  };
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  if (!arrOfArr || !arrOfArr.length) {
    return 0;  
  };
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i]);
    if (maxWorkerResult < func(...arrOfArr[i])) {
      maxWorkerResult = func(...arrOfArr[i]);
    };
  };
  return maxWorkerResult;
}
