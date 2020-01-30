import React from 'react';
import './SortingVisualizer.css';
import {
	getMergeSortAnimations,
	getBubbleSortAnimations,
	getInsertionSortAnimations,
	getSelectionSortAnimations,
	getHeapSortAnimations
} from '../SortingAlgorithms/sortingAlgorithms.js';
import $ from 'jquery';
const PRIMARY_COLOR = 'rgb(255, 198, 92)';
const SECONDARY_COLOR = 'purple';
const THIRD_COLOR = 'rgb(255, 198, 92)';

export default class SortingVisualizer extends React.Component {
	constructor(props) {
		super(props);
		//this.selectSpeed = this.selectSpeed.bind(this);
		this.state = {
			array: [],
			array_length: 34, //props.array_length,
			speed: 1
		};
		// this.toggle_length = this.toggle_length.bind(this);
	}
	toggle_length(val) {
		//console.log(val);
		this.setState({ array_length: val });
		this.resetArray();
	}
	componentDidMount() {
		//first time loading
		this.resetArray();
	}
	resetArray() {
		//creates array
		const array = [];
		// let len = this.state.array_length;

		for (let i = 0; i < this.state.array_length; i++) {
			array.push(randomInt(10, 500));
		}
		this.setState({ array });
	}
	seeAnother() {
		window.location.reload();
	}
	btnClickSlow() {
		this.setState({ speed: 80 });
	}
	btnClickFast() {
		this.setState({ speed: 1 });
	}

	btnClickNormal() {
		this.setState({ speed: 30 });
	}
	disableButtons() {
		document.getElementById('shuffle').disabled = true;
		document.getElementById('speed').disabled = true;
		document.getElementById('quick').disabled = true;
		document.getElementById('bubble').disabled = true;
		document.getElementById('selection').disabled = true;
		document.getElementById('insertion').disabled = true;
		document.getElementById('heap').disabled = true;
		document.getElementById('merge').disabled = true;
		document.getElementById('slider').disabled = true;
		document.getElementById('shuffle').title = 'Click See Another';
		document.getElementById('speed').title = 'Click See Another';
		document.getElementById('quick').title = 'Click See Another';
		document.getElementById('bubble').title = 'Click See Another';
		document.getElementById('selection').title = 'Click See Another';
		document.getElementById('insertion').title = 'Click See Another';
		document.getElementById('heap').title = 'Click See Another';
		document.getElementById('merge').title = 'Click See Another';
		document.getElementById('slider').title = 'Click See Another';
	}
	enableButtons() {
		document.getElementById('shuffle').disabled = false;
		document.getElementById('speed').disabled = false;
		document.getElementById('quick').disabled = false;
		document.getElementById('bubble').disabled = false;
		document.getElementById('selection').disabled = false;
		document.getElementById('insertion').disabled = false;
		document.getElementById('heap').disabled = false;
		document.getElementById('merge').disabled = false;
		document.getElementById('slider').disabled = false;
	}
	render() {
		const { array } = this.state;
		//if array len is between is less or equal to 37
		let bar_size = '';
		const len = this.state.array_length;
		let font_size = '';

		//make a function later
		//can be automated
		if (len <= 33) {
			bar_size = '30px';
		}
		if (len > 33 && len < 37) {
			bar_size = '28px';
		}
		if (len >= 37 && len <= 40) {
			bar_size = '25px';
		}
		if (len > 40 && len <= 43) {
			bar_size = '22px';
		}
		if (len > 43 && len <= 47) {
			bar_size = '20px';
		}
		if (len > 47 && len <= 50) {
			bar_size = '18px';
		}
		if (len > 50 && len <= 53) {
			bar_size = '17px';
		}
		if (len > 53 && len <= 58) {
			bar_size = '16px';
		}
		if (len > 58 && len <= 64) {
			bar_size = '14px';
		}
		if (len > 64 && len <= 66) {
			bar_size = '13px';
		}
		if (len > 66 && len <= 72) {
			bar_size = '12px';
		}
		if (len > 72 && len <= 80) {
			bar_size = '11px';
		}
		if (len > 80 && len <= 90) {
			bar_size = '10px';
		}
		if (len > 90 && len <= 100) {
			bar_size = '9px';
		}
		if (len > 100 && len <= 120) {
			bar_size = '7px';
		}
		if (len > 120 && len <= 137) {
			bar_size = '6px';
		}
		if (len > 137 && len <= 150) {
			bar_size = '5px';
		}
		if (len > 150 && len <= 183) {
			bar_size = '4px';
		}
		if (len > 183 && len <= 220) {
			bar_size = '3px';
		}
		if (len > 220 && len <= 280) {
			bar_size = '2px';
		}
		return (
			<div className='container'>
				<div className='nav-bar'>
					<div className='row justify-content-center pb-3 '>
						<div className='col-md-3 '>
							<div className='slider row justify-content-center'>
								<label className='boot-color'>Number of Bars</label>
								<input
									id='slider'
									className='slider1 custom-range'
									value={this.state.array_length}
									onChange={e => this.toggle_length(e.target.value)}
									name='arraySize'
									type='range'
									min='5'
									max='275'
								/>
							</div>
						</div>
					</div>
					<div className='btn-group mr-2' role='group' aria-label='First group'>
						<button
							id='shuffle'
							type='button'
							className='btn btn-secondary boot-background boot-color boot-hover'
							onClick={() => this.resetArray()}
						>
							Shuffle
						</button>
						<div className='dropdown'>
							<button
								className=' dropdownMenuButton btn btn-secondary dropdown-toggle boot-background boot-color boot-hover'
								type='button'
								id='speed'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								Fast
								<span className='caret' />
							</button>
							<div
								className='dropdown-menu boot-background boot-color '
								aria-labelledby='dropdownMenuButton'
							>
								<button
									className='btn btn-secondary dropdown-item boot-background boot-color boot-hover '
									value='3'
									onClick={this.btnClickFast.bind(this)}
								>
									Fast
								</button>
								<button
									className='btn btn-secondary dropdown-item boot-background boot-color boot-hover '
									value='60'
									onClick={this.btnClickNormal.bind(this)}
								>
									Normal
								</button>
								<button
									className='btn btn-secondary dropdown-item boot-background boot-color  boot-hover'
									value='200'
									onClick={this.btnClickSlow.bind(this)}
								>
									Slow
								</button>
							</div>
						</div>
						<button
							id='try'
							type='button'
							className='btn btn-secondary boot-background boot-color boot-hover'
							onClick={() => this.seeAnother()}
						>
							See Another
						</button>
					</div>

					<button
						type='button'
						id='merge'
						className='btn btn-outline-secondary boot-background boot-color boot-hover'
						onClick={() => this.mergeSort()}
					>
						Merge Sort
					</button>
					<button
						type='button'
						id='quick'
						className='btn btn-outline-secondary boot-background boot-color boot-hover'
						onClick={() => this.quickSort()}
					>
						Quick Sort
					</button>
					<button
						type='button'
						id='heap'
						className='btn btn-outline-secondary boot-background boot-color boot-hover'
						onClick={() => this.heapSort()}
					>
						Heap Sort
					</button>
					<button
						type='button'
						ref='btn'
						id='bubble'
						className='stop-propagation btn btn-outline-secondary boot-background boot-color boot-hover'
						onClick={() => this.bubbleSort()}
					>
						Bubble Sort
					</button>
					<button
						type='button'
						id='selection'
						className='btn btn-outline-secondary boot-background boot-color boot-hover'
						onClick={() => this.selectionSort()}
					>
						Selection Sort
					</button>
					<button
						type='button'
						id='insertion'
						className='btn btn-outline-secondary boot-background boot-color boot-hover'
						onClick={() => this.inserstionSort()}
					>
						Insertion Sort
					</button>
				</div>

				{array.map((value, idx) => (
					<div className='array-container' key={idx}>
						<div
							className='numbers'
							id='numbers'
							textcontent={value}
							style={
								this.state.array_length <= 37
									? {
											fontSize: '3%'
									  }
									: {
											fontSize: '0%'
									  }
							}
						>
							{value}
						</div>
						<div
							className='array-bar'
							style={{
								height: `${value}px`,
								width: bar_size
							}}
						/>
					</div>
				))}
			</div>
		);
	}

	//MERGE SORT
	//******************************************************************************************************************************************************************************************************************************************************************************************************************** */
	mergeSort() {
		const animations = getMergeSortAnimations(this.state.array);
		this.disableButtons();
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
				const color = i % 3 === 0 ? SECONDARY_COLOR : THIRD_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
					barOneStyleNo.backgroundColor = color;
					barTwoStyleNo.backgroundColor = color;
					//num1.textContent = num2Text;
					//num2.textContent = num1.textContent;
				}, i * this.state.speed);
			} else {
				//console.log(numbersBars[barOneIdx]);
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					let newH = newHeight;
					newH = newH.toString().replace('px', '');
					numbersBars[barOneIdx].textContent = newH;
					barOneStyle.height = `${newHeight}px`;
				}, i * this.state.speed);
			}
		}
	}

	//BUBBLE SORT
	//******************************************************************************************************************************************************************************************************************************************************************************************************************** */
	bubbleSort() {
		this.disableButtons();
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
					const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
					barOneStyleNo.backgroundColor = color;
					barTwoStyleNo.backgroundColor = color;
				}, i * this.state.speed);
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
				}, i * this.state.speed);
			}
		}
	}
	//******************************************************************************************************************************************************************************************************************************************************************************************************************** */
	inserstionSort() {
		this.animateAlgo(getInsertionSortAnimations(this.state.array));
	}
	selectionSort() {
		this.animateAlgo(getSelectionSortAnimations(this.state.array));
	}
	heapSort() {
		this.animateAlgo(getHeapSortAnimations(this.state.array));
	}
	quickSort() {}

	animateAlgo(animations) {
		this.disableButtons();
		// let array = this.state.array;
		//const animations = animation;
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName('array-bar');
			const arrayBarsWithNo = document.getElementsByClassName(
				'array-container'
			);
			const numbersBars = document.getElementsByClassName('numbers');
			//color change is on ever 4 indexes: 0, 4, 8 ...
			const colorChange = i % 4 <= 1;
			if (colorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
				const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
				const color = i % 4 === 0 ? SECONDARY_COLOR : THIRD_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
					barOneStyleNo.backgroundColor = color;
					barTwoStyleNo.backgroundColor = color;
				}, i * this.state.speed);
			} else {
				const [, newHeight] = animations[i];
				// /const barOneStyle = arrayBars[barOneIdx].style;
				let newH = newHeight;
				newH = newH.toString().replace('px', '');
				//console.log(numbersBars[barOneIdx]);
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					numbersBars[barOneIdx].textContent = newH; //
					barOneStyle.height = `${newHeight}px`;
				}, i * this.state.speed);
			}
		}
	}
}

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
//takes care of drop down button: changes text when you change speed
$(document).ready(function() {
	$('.dropdown-menu  button').click(function() {
		$('.dropdownMenuButton:first-child').html(
			$(this).text() + ' <span class="caret"></span>'
		);
	});
});
