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
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([
        k, auxiliaryArray[i]
      ]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([
        k, auxiliaryArray[j]
      ]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([
      k, auxiliaryArray[i]
    ]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([
      k, auxiliaryArray[j]
    ]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
/* Bubble Sort
 ******************************************************************************************************************************************************************************************************************************************************************************************************************** */

export function bubbleSort(mainArray, speed) {
  var array = mainArray;
  console.log(array);
  var isSorted = false;
  var iteration = 0;
  while (!isSorted) {
    let lastUnsorted = array.length - 1;
    isSorted = true;
    for (let i = 0; i < lastUnsorted - iteration; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, array[i], array[i + 1]);
        isSorted = false;
      }
    }
    iteration++;
  }
  console.log(array);
  //handleBubbleSortAnimations(animations, animate, array, speed);
  return array;
}

export function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

/*function handleBubbleSortAnimations(animations, animate, array, speed) {
  if (!animations.length) {
    animate(setCurrentBubbleTwo(array.map((num, index) => index)));
    setTimeout(() =>{
      animate(setCurrentBubbleTwo([]));
      animate(setCurrentSorted(array.map((num,index) => index)));
      animate(setRunning(false));
    },900);
    return;
  }
  let animateFunction = animations[0].length > 3 ?
    setArray : animations[0].length === 3 || animations[0].length === 0 ?
      setCurrentSwappers : animations[0].length === 2 && typeof animations[0][0] === "boolean" ?
        setCurrentSorted : setCurrentBubbleTwo;
  animate(animateFunction(animations.shift()));
  setTimeout(() => {
    handleBubbleSortAnimations(animations, animate, array, speed);
  }, speed);
}*/
