import React from "react";
import "./SortingVisualizer.css";
import {getMergeSortAnimations, getBubbleSortAnimations, getInsertionSortAnimations, getSelectionSortAnimations, getHeapSortAnimations} from "../SortingAlgorithms/sortingAlgorithms.js";
import $ from "jquery";
const PRIMARY_COLOR = "rgb(255, 198, 92)";
const SECONDARY_COLOR = "purple";
const THIRD_COLOR = "rgb(255, 198, 92)";
const ARRAY_LENGTH = 37;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    //this.selectSpeed = this.selectSpeed.bind(this);
    this.state = {
      array: [],
      sorted: false,
      speed: 3,
      stop: false
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
      array.push(randomInt(5, 500));
    }
    this.setState({array});
  }
  seeAnother() {
    window.location.reload();
  }
  btnClickSlow() {
    this.setState({speed: 200});
  }
  btnClickFast() {
    this.setState({speed: 1});
  }

  btnClickNormal() {
    this.setState({speed: 80});
  }
  disableButtons() {
    document.getElementById("shuffle").disabled = true;
    document.getElementById("speed").disabled = true;
    document.getElementById("quick").disabled = true;
    document.getElementById("bubble").disabled = true;
    document.getElementById("selection").disabled = true;
    document.getElementById("insertion").disabled = true;
    document.getElementById("heap").disabled = true;
    document.getElementById("merge").disabled = true;

    document.getElementById("shuffle").title = "Click See Another";
    document.getElementById("speed").title = "Click See Another";
    document.getElementById("quick").title = "Click See Another";
    document.getElementById("bubble").title = "Click See Another";
    document.getElementById("selection").title = "Click See Another";
    document.getElementById("insertion").title = "Click See Another";
    document.getElementById("heap").title = "Click See Another";
    document.getElementById("merge").title = "Click See Another";
  }
  enableButtons() {
    document.getElementById("shuffle").disabled = false;
    document.getElementById("speed").disabled = false;
    document.getElementById("quick").disabled = false;
    document.getElementById("bubble").disabled = false;
    document.getElementById("selection").disabled = false;
    document.getElementById("insertion").disabled = false;
    document.getElementById("heap").disabled = false;
    document.getElementById("merge").disabled = false;
  }
  render() {
    const {array} = this.state;
    return (<div className="container">
      <div className="nav-bar">
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button id="shuffle" type="button" className="btn btn-secondary boot-background boot-color boot-hover" onClick={() => this.resetArray()}>
            Shuffle
          </button>
          <div className="dropdown">
            <button className=" dropdownMenuButton btn btn-secondary dropdown-toggle boot-background boot-color boot-hover" type="button" id="speed" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Fast
              <span className="caret"/>
            </button>
            <div className="dropdown-menu boot-background boot-color " aria-labelledby="dropdownMenuButton">
              <button className="btn btn-secondary dropdown-item boot-background boot-color boot-hover " value="3" onClick={this.btnClickFast.bind(this)}>
                Fast
              </button>
              <button className="btn btn-secondary dropdown-item boot-background boot-color boot-hover " value="60" onClick={this.btnClickNormal.bind(this)}>
                Normal
              </button>
              <button className="btn btn-secondary dropdown-item boot-background boot-color  boot-hover" value="200" onClick={this.btnClickSlow.bind(this)}>
                Slow
              </button>
            </div>
          </div>
          <button id="try" type="button" className="btn btn-secondary boot-background boot-color boot-hover" onClick={() => this.seeAnother()}>
            See Another
          </button>
        </div>

        <button type="button" id="merge" className="btn btn-outline-secondary boot-background boot-color boot-hover" onClick={() => this.mergeSort()}>
          Merge Sort
        </button>
        <button type="button" id="quick" className="btn btn-outline-secondary boot-background boot-color boot-hover" onClick={() => this.quickSort()}>
          Quick Sort
        </button>
        <button type="button" id="heap" className="btn btn-outline-secondary boot-background boot-color boot-hover" onClick={() => this.heapSort()}>
          Heap Sort
        </button>
        <button type="button" ref="btn" id="bubble" className="stop-propagation btn btn-outline-secondary boot-background boot-color boot-hover" onClick={() => this.bubbleSort()}>
          Bubble Sort
        </button>
        <button type="button" id="selection" className="btn btn-outline-secondary boot-background boot-color boot-hover" onClick={() => this.selectionSort()}>
          Selection Sort
        </button>
        <button type="button" id="insertion" className="btn btn-outline-secondary boot-background boot-color boot-hover" onClick={() => this.inserstionSort()}>
          Insertion Sort
        </button>
      </div>

      {
        array.map((value, idx) => (<div className="array-container" key={idx}>
          <div className="numbers" id="numbers" textcontent={value}>
            {value}
          </div>
          <div className="array-bar" style={{
              height: `${value}px`
            }}/>
        </div>))
      }
    </div>);
  }

  //MERGE SORT
  //******************************************************************************************************************************************************************************************************************************************************************************************************************** */
  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    this.disableButtons();
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const arrayBarsWithNo = document.getElementsByClassName("array-container");
      const numbersBars = document.getElementsByClassName("numbers");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
        const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
        const color = i % 3 === 0
          ? SECONDARY_COLOR
          : THIRD_COLOR;
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
          newH = newH.toString().replace("px", "");
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
      const arrayBars = document.getElementsByClassName("array-bar");
      const arrayBarsWithNo = document.getElementsByClassName("array-container");
      const numbersBars = document.getElementsByClassName("numbers");
      //color change is on ever 4 indexes: 0, 4, 8 ...
      const colorChange = i % 4 === 0 || i % 4 === 1;
      if (colorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
        const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;

        setTimeout(() => {
          const color = i % 4 === 0
            ? SECONDARY_COLOR
            : PRIMARY_COLOR;
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
        newH = newH.toString().replace("px", "");

        //console.log(numbersBars[barOneIdx]);
        setTimeout(() => {
          numbersBars[barOneIdx].textContent = newH;
          barOneStyle.height = `${newHeight}px`;
        }, i * this.state.speed);
      }
    }
  }
  //INSERTION SORT
  //******************************************************************************************************************************************************************************************************************************************************************************************************************** */
  inserstionSort() {
    this.animateAlgo(getInsertionSortAnimations(this.state.array));
  }
  selectionSort() {
    this.animateAlgo(getSelectionSortAnimations(this.state.array));
  }
  //HEAP SORT
  //******************************************************************************************************************************************************************************************************************************************************************************************************************** */
  heapSort() {
    this.animateAlgo(getHeapSortAnimations(this.state.array));
  }
  //Quick SORT
  //******************************************************************************************************************************************************************************************************************************************************************************************************************** */
  quickSort() {}

  animateAlgo(animations) {
    this.disableButtons();
    // let array = this.state.array;
    //const animations = animation;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const arrayBarsWithNo = document.getElementsByClassName("array-container");
      const numbersBars = document.getElementsByClassName("numbers");
      //color change is on ever 4 indexes: 0, 4, 8 ...
      const colorChange = i % 4 <= 1;
      if (colorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const barOneStyleNo = arrayBarsWithNo[barOneIdx].style;
        const barTwoStyleNo = arrayBarsWithNo[barTwoIdx].style;
        const color = i % 4 === 0
          ? SECONDARY_COLOR
          : THIRD_COLOR;
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
        newH = newH.toString().replace("px", "");
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
/*$(document).ready(function() {
	$('.dropdown-item').click(function() {
		console.log($(this).text());
	});
});*/

$(document).ready(function () {
  $(".dropdown-menu  button").click(function () {
    $(".dropdownMenuButton:first-child").html($(this).text() + ' <span class="caret"></span>');
  });
});
