import React from "react";
import ReactDOM from "react-dom";
import "./SortingVisualizer.css";
import {getMergeSortAnimations} from "../SortingAlgorithms/sortingAlgorithms.js";
import {swap} from "../SortingAlgorithms/sortingAlgorithms.js";
//import {bubbleSort} from "../SortingAlgorithms/sortingAlgorithms.js";
const ANIMATION_SPEED_MS = 2;

// This is the main color of the array bars.
let PRIMARY_COLOR = "orange";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "purple";
export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
  }
  componentDidMount() {
    //first time loading
    this.resetArray();
  }
  resetArray() {
    //creates array
    const array = [];
    for (let i = 0; i < 20; i++) {
      array.push(randomInt(5, 500));
    }
    this.setState({array});
    PRIMARY_COLOR = "rgb(195, 146, 223)";
  }
  getValue(val) {
    return this.state.array[val];
  }
  //******************************************************************************************************************************************************************************************************************************************************************************************************************** */
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const arrayBarsWithNo = document.getElementsByClassName("array-container");
      let nums = document.getElementById("numbers");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
        const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
        PRIMARY_COLOR = "orange";
        const color = i % 3 === 0
          ? SECONDARY_COLOR
          : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
          barOneStyleNo.backgroundColor = color;
          barTwoStyleNo.backgroundColor = color;
          //num1.textContent = num2Text;
          //num2.textContent = num1.textContent;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          //nums.innerHTML = newHeight;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  //******************************************************************************************************************************************************************************************************************************************************************************************************************** */

  //******************************************************************************************************************************************************************************************************************************************************************************************************************** */
  bubbleSort() {
    let array = this.state.array;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < array.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const arrayBarsWithNo = document.getElementsByClassName("array-container");
        if (array[i] > array[i + 1]) {
          let tmp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = tmp;
          swapped = true;
        }
      }
    } while (swapped);
    return array;
  }
  getNext = i => {
    console.log(i + 1);
  };

  quickSort() {}
  pancakeSort() {}
  heapSort() {}
  inserstionSort() {}
  selectionSort() {}

  render() {
    const {array} = this.state;
    const index = 0;
    return (<div className="container">
      <div className="nav-bar">
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-secondary boot-background boot-color" onClick={() => this.resetArray()}>
            Shuffle
          </button>
        </div>
        <button type="button" className="btn btn-outline-secondary boot-background boot-color" onClick={() => this.mergeSort()}>
          Merge Sort
        </button>
        <button type="button" className="btn btn-outline-secondary boot-background boot-color" onClick={() => this.quickSort()}>
          Quick Sort
        </button>
        <button type="button" className="btn btn-outline-secondary boot-background boot-color" onClick={() => this.pancakeSort()}>
          Pancake Sort
        </button>
        <button type="button" className="btn btn-outline-secondary boot-background boot-color" onClick={() => this.heapSort()}>
          Heap Sort
        </button>
        <button type="button" className="btn btn-outline-secondary boot-background boot-color" onClick={() => this.bubbleSort()}>
          Bubble Sort
        </button>
        <button type="button" className="btn btn-outline-secondary boot-background boot-color" onClick={() => this.selectionSort()}>
          Selection Sort
        </button>
        <button type="button" className="btn btn-outline-secondary boot-background boot-color" onClick={() => this.inserstionSort()}>
          Insertion Sort
        </button>
      </div>

      {
        array.map((value, idx) => (<div className="array-container">
          <div className="numbers" id="numbers">
            {value}
          </div>
          <div className="array-bar" key={idx} style={{
              height: `${value}px`
            }}/>
        </div>))
      }
    </div>);
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
