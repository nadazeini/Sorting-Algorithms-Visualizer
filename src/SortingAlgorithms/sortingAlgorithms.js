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
/* Heap Sort
 ******************************************************************************************************************************************************************************************************************************************************************************************************************** */
export function getHeapSortAnimations(array) {
  const animations = [];
  doHeapSort(array, animations);
  console.log(animations);
  return animations;
}

function doHeapSort(array, animations) {
  let n = array.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    buildMaxHeap(array, n, i, animations);
  }
  //remove root node
  for (let j = n - 1; j > 0; j--) {
    swap(array, 0, j, animations);

    //heapify the reduced heap
    n--;
    buildMaxHeap(array, n, 0, animations);
  }
}

function buildMaxHeap(array, n, i, animations) {
  let largest = i;
  let left_child = i * 2 + 1;
  let right_child = i * 2 + 2;

  if (left_child < n && array[left_child] > array[largest]) {
    //console.log(left_child);
    //console.log(right_child);
    //console.log(animations);
    animations.push([left_child, largest]); //color 2 bars
    animations.push([left_child, largest]); //uncolor them
    animations.push([
      0, array[0]
    ]);
    animations.push([
      0, array[0]
    ]);
    largest = left_child;
  }
  if (right_child < n && array[right_child] > array[largest]) {
    animations.push([right_child, largest]); //color 2 bars
    animations.push([right_child, largest]);
    animations.push([
      0, array[0]
    ]);
    animations.push([
      0, array[0]
    ]);
    largest = right_child;
  }
  if (largest !== i) {
    swap(array, i, largest, animations);
    //heapidy the subtree
    buildMaxHeap(array, n, largest, animations);
  }
}

function swap(a, i, j, animations) {
  animations.push([i, j]);
  animations.push([i, j]);
  animations.push([
    i, a[j]
  ]); //swapped in bars
  animations.push([
    j, a[i]
  ]); //swapped in bars
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}
/* Quick Sort / first element as pivot
 ******************************************************************************************************************************************************************************************************************************************************************************************************************** */
export function getQuickSortAnimations(array) {
  const animations = [];
  let left = 0;
  let right = array.length - 1;
  doQuickSort(array, left, right, animations);
  return animations;
}

function doQuickSort(array, left, right, animations) {
  if (left >= right) 
    return;
  let pivot_index = partition(array, left, right, animations);
  doQuickSort(array, left, pivot_index - 1, animations);
  doQuickSort(array, pivot_index + 1, right, animations);
}

function partition(array, left, right, animations) {
  let pivot = array[left];
  let lower = left + 1;
  let upper = right;
  let cross = false;
  while (!cross) {
    while (array[lower] <= pivot && lower <= upper) {
      animations.push([left, lower]);
      animations.push([left, lower]);
      animations.push([
        0, array[0]
      ]);
      animations.push([
        0, array[0]
      ]);
      lower++;
    }
    while (array[upper] >= pivot && lower <= upper) {
      animations.push([left, upper]);
      animations.push([left, upper]);
      animations.push([
        0, array[0]
      ]);
      animations.push([
        0, array[0]
      ]);
      upper--;
    }
    if (upper < lower) {
      cross = true;
    } else {
      animations.push([lower, upper]);
      animations.push([lower, upper]);
      animations.push([
        lower, array[upper]
      ]);
      animations.push([
        upper, array[lower]
      ]);
      //swap
      let temp = array[lower];
      array[lower] = array[upper];
      array[upper] = temp;
    }
  }
  animations.push([left, upper]);
  animations.push([left, upper]);
  animations.push([
    left, array[upper]
  ]);
  animations.push([upper, pivot]);
  let temp = array[upper];
  array[upper] = pivot;
  array[left] = temp;
  return upper;
}