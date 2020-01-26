/* Merge Sort
 ******************************************************************************************************************************************************************************************************************************************************************************************************************** */
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) 
    return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) 
    return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([
        k, auxiliaryArray[i]
      ]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([
        k, auxiliaryArray[j]
      ]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([
      k, auxiliaryArray[i]
    ]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([
      k, auxiliaryArray[j]
    ]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
/* Bubble Sort
 ******************************************************************************************************************************************************************************************************************************************************************************************************************** */
export function getBubbleSortAnimations(array) {
  let animations = [];
  let auxArray = array.slice();
  doBubbleSort(auxArray, animations);
  array = auxArray;
  return animations;
}

function doBubbleSort(auxArray, animations) {
  for (let i = 0; i < auxArray.length - 1; i++) {
    for (let j = 0; j < auxArray.length - 1 - i; j++) {
      //push once to color
      animations.push([
        j, j + 1
      ]);
      //push second time to uncolor?
      animations.push([
        j, j + 1
      ]);
      if (auxArray[j] > auxArray[j + 1]) {
        //swap
        animations.push([
          j + 1,
          auxArray[j]
        ]);
        animations.push([
          j,
          auxArray[j + 1]
        ]);

        let tmp = auxArray[j + 1];
        auxArray[j + 1] = auxArray[j];
        auxArray[j] = tmp;
      } else {
        // if -1 then there was no swap
        animations.push([-1, -1]);
        animations.push([-1, -1]);
        //not sure if twice
      }
    }
  }
}
/* Insertion Sort
 ******************************************************************************************************************************************************************************************************************************************************************************************************************** */
export function getInsertionSortAnimations(array) {
  const animations = [];
  //let auxArray = array.slice();
  doInsertionSort(array, animations);
  //array = auxArray;  not needed but will see
  return animations;
}

function doInsertionSort(array, animations) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        animations.push([
          j, j - 1
        ]);
        animations.push([
          j, j - 1
        ]);
        animations.push([
          j - 1,
          array[j]
        ]);
        animations.push([
          j,
          array[j - 1]
        ]);
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
}
/* Selection Sort
/******************************************************************************************************************************************************************************************************************************************************************************************************************** */
export function getSelectionSortAnimations(array) {
  const animations = [];
  doSelectionSort(array, animations);
  return animations;
}

function doSelectionSort(array, animations) {
  for (let i = 0; i < array.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([min_index, j]); //color
      animations.push([min_index, j]); //uncolor
      animations.push([
        0, array[0]
      ]);
      animations.push([
        0, array[0]
      ]);
      if (array[j] < array[min_index]) {
        min_index = j;
      }
    }
    animations.push([i, min_index]);
    animations.push([i, min_index]);
    animations.push([
      i, array[min_index]
    ]);
    animations.push([
      min_index, array[i]
    ]);
    let temp = array[min_index];
    array[min_index] = array[i];
    array[i] = temp;
  }
}
