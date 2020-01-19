/* Merge Sort
 ******************************************************************************************************************************************************************************************************************************************************************************************************************** */
export function getMergeSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return array;
	const auxiliaryArray = array.slice();
	mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
	return animations;
}

function mergeSortHelper(
	mainArray,
	startIdx,
	endIdx,
	auxiliaryArray,
	animations
) {
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
	mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
	doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
	mainArray,
	startIdx,
	middleIdx,
	endIdx,
	auxiliaryArray,
	animations
) {
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while (i <= middleIdx && j <= endIdx) {
		animations.push([i, j]);
		animations.push([i, j]);
		if (auxiliaryArray[i] <= auxiliaryArray[j]) {
			animations.push([k, auxiliaryArray[i]]);
			mainArray[k++] = auxiliaryArray[i++];
		} else {
			animations.push([k, auxiliaryArray[j]]);
			mainArray[k++] = auxiliaryArray[j++];
		}
	}
	while (i <= middleIdx) {
		animations.push([i, i]);
		animations.push([i, i]);
		animations.push([k, auxiliaryArray[i]]);
		mainArray[k++] = auxiliaryArray[i++];
	}
	while (j <= endIdx) {
		animations.push([j, j]);
		animations.push([j, j]);
		animations.push([k, auxiliaryArray[j]]);
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
			animations.push([j, j + 1]);
			//push second time to uncolor?
			animations.push([j, j + 1]);
			if (auxArray[j] > auxArray[j + 1]) {
				//swap
				animations.push([j + 1, auxArray[j]]);
				animations.push([j, auxArray[j + 1]]);

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
