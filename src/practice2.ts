type ArrayType = number[];

const arr1: ArrayType = [1, 23, 34, 2];
const arr2: ArrayType = [1, 23, 34, 2];

function compareArr(param1: ArrayType, param2: ArrayType): ArrayType {
  let newArr: ArrayType = [];
  for (let i = 0; i < param1.length; i++) {
    if (param1[i] === param2[i]) {
      newArr.push(param2[i]);
    }
  }
  return newArr;
}

compareArr(arr1, arr2);
