import React from 'react';
import './SortingVisualizer.css';
import {
	getMergeSortAnimations,
	getBubbleSortAnimations
} from '../SortingAlgorithms/sortingAlgorithms.js';

const ANIMATION_SPEED_MS = 5;
const PRIMARY_COLOR = 'rgb(195, 146, 223)';
const SECONDARY_COLOR = 'purple';
const ARRAY_LENGTH = 35;

export default class SortingVisualizer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			array: [],
			sorted: false
		};
	}
	componentDidMount() {
		//first time loading
		this.resetArray();
	}
	resetArray() {
		//creates array
		const array = [];
		for (let i = 0; i < ARRAY_LENGTH; i++) {
			array.push(randomInt(5, 400));
		}
		this.setState({ array });
	}
	getValue(val) {
		return this.state.array[val];
	}

	//MERGE SORT
	//******************************************************************************************************************************************************************************************************************************************************************************************************************** */
	mergeSort() {
		const animations = getMergeSortAnimations(this.state.array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName('array-bar');
			const arrayBarsWithNo = document.getElementsByClassName(
				'array-container'
			);
			const numbersBars = document.getElementsByClassName('numbers');
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
				const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
					barOneStyleNo.backgroundColor = color;
					barTwoStyleNo.backgroundColor = color;
					//num1.textContent = num2Text;
					//num2.textContent = num1.textContent;
				}, i * ANIMATION_SPEED_MS);
			} else {
				//console.log(numbersBars[barOneIdx]);
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					let newH = newHeight;
					newH = newH.toString().replace('px', '');
					numbersBars[barOneIdx].textContent = newH;
					barOneStyle.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	}

	//******************************************************************************************************************************************************************************************************************************************************************************************************************** */

	//******************************************************************************************************************************************************************************************************************************************************************************************************************** */
	bubbleSort() {
		let array = this.state.array;
		let animations = getBubbleSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName('array-bar');
			const arrayBarsWithNo = document.getElementsByClassName(
				'array-container'
			);
			const numbersBars = document.getElementsByClassName('numbers');
			//color change is on ever 4 indexes: 0, 4, 8 ...
			const colorChange = i % 4 === 0 || i % 4 === 1;
			if (colorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
				const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
				const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
					barOneStyleNo.backgroundColor = color;
					barTwoStyleNo.backgroundColor = color;
				}, i * ANIMATION_SPEED_MS);
			} else {
				const [barOneIdx, newHeight] = animations[i];
				if (barOneIdx === -1) {
					continue;
				}
				const barOneStyle = arrayBars[barOneIdx].style;
				let newH = newHeight;
				newH = newH.toString().replace('px', '');

				//console.log(numbersBars[barOneIdx]);
				setTimeout(() => {
					numbersBars[barOneIdx].textContent = newH;
					barOneStyle.height = `${newHeight}px`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	}

	quickSort() {}
	pancakeSort() {}
	heapSort() {}
	inserstionSort() {}
	selectionSort() {}
	render() {
		const { array } = this.state;
		return (
			<div className='container'>
				<div className='nav-bar'>
					<div className='btn-group mr-2' role='group' aria-label='First group'>
						<button
							type='button'
							className='btn btn-secondary boot-background boot-color'
							onClick={() => this.resetArray()}
						>
							Shuffle
						</button>
					</div>
					<button
						type='button'
						className='btn btn-outline-secondary boot-background boot-color'
						onClick={() => this.mergeSort()}
					>
						Merge Sort
					</button>
					<button
						type='button'
						className='btn btn-outline-secondary boot-background boot-color'
						onClick={() => this.quickSort()}
					>
						Quick Sort
					</button>
					<button
						type='button'
						className='btn btn-outline-secondary boot-background boot-color'
						onClick={() => this.pancakeSort()}
					>
						Pancake Sort
					</button>
					<button
						type='button'
						className='btn btn-outline-secondary boot-background boot-color'
						onClick={() => this.heapSort()}
					>
						Heap Sort
					</button>
					<button
						type='button'
						className='btn btn-outline-secondary boot-background boot-color'
						onClick={() => this.bubbleSort()}
					>
						Bubble Sort
					</button>
					<button
						type='button'
						className='btn btn-outline-secondary boot-background boot-color'
						onClick={() => this.selectionSort()}
					>
						Selection Sort
					</button>
					<button
						type='button'
						className='btn btn-outline-secondary boot-background boot-color'
						onClick={() => this.inserstionSort()}
					>
						Insertion Sort
					</button>
				</div>

				{array.map((value, idx) => (
					<div className='array-container' key={idx}>
						<div className='numbers' id='numbers' textcontent={value}>
							{value}
						</div>
						<div
							className='array-bar'
							
							style={{
								height: `${value}px`
							}}
						/>
					</div>
				))}
			</div>
		);
	}
}
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
