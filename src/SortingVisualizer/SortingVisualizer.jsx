import React from 'react';
import './SortingVisualizer.css';
import {
	getMergeSortAnimations,
	getBubbleSortAnimations
} from '../SortingAlgorithms/sortingAlgorithms.js';

const PRIMARY_COLOR = 'rgb(195, 146, 223)';
const SECONDARY_COLOR = 'orange';
const THIRD_COLOR = 'orange';
const ARRAY_LENGTH = 35;

export default class SortingVisualizer extends React.Component {
	constructor(props) {
		super(props);
		//this.selectSpeed = this.selectSpeed.bind(this);
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
		//console.log(this.selectSpeed);
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
				}, i * this.selectSpeed);
			} else {
				//console.log(numbersBars[barOneIdx]);
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					let newH = newHeight;
					newH = newH.toString().replace('px', '');
					numbersBars[barOneIdx].textContent = newH;
					barOneStyle.height = `${newHeight}px`;
				}, i * this.selectSpeed);
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

				setTimeout(() => {
					//const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
					if (i % 4 === 0) {
						barOneStyle.backgroundColor = SECONDARY_COLOR;
						barTwoStyle.backgroundColor = THIRD_COLOR;
						barOneStyleNo.backgroundColor = SECONDARY_COLOR;
						barTwoStyleNo.backgroundColor = THIRD_COLOR;
					} else {
						barOneStyle.backgroundColor = PRIMARY_COLOR;
						barTwoStyle.backgroundColor = PRIMARY_COLOR;
						barOneStyleNo.backgroundColor = PRIMARY_COLOR;
						barTwoStyleNo.backgroundColor = PRIMARY_COLOR;
					}
				}, i * this.selectSpeed);
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
				}, i * this.selectSpeed);
			}
		}
	}
	selectSpeed(e) {
		console.log(e.target.value);
		return e.target.value;
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
						<div class='dropdown'>
							<button
								className='btn btn-secondary dropdown-toggle boot-background boot-color'
								type='button'
								id='dropdownMenuButton'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Speed
							</button>
							<div
								class='dropdown-menu boot-background boot-color'
								aria-labelledby='dropdownMenuButton'
							>
								<button
									class='btn btn-secondary dropdown-item boot-background boot-color'
									value='3'
									onClick={this.selectSpeed}
								>
									Fast
								</button>
								<button
									class='btn btn-secondary dropdown-item boot-background boot-color'
									value='60'
									onClick={this.selectSpeed}
								>
									Normal
								</button>
								<button
									class='btn btn-secondary dropdown-item boot-background boot-color'
									value='200'
									onClick={this.selectSpeed}
								>
									Slow
								</button>
							</div>
						</div>
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
