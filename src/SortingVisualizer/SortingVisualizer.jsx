import React from "react";
import "./SortingVisualizer.css";

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
    for (let i = 0; i < 50; i++) {
      array.push(randomInt(5, 500));
    }
    this.setState({array});
  }
  getValue(val) {
    return this.state.array[val];
  }
  mergeSort() {}
  quickSort() {}
  pancakeSort() {}
  heapSort() {}
  bubbleSort() {}

  render() {
    const {array} = this.state;
    const index = 0;
    return (<div className="container">
      <div className="nav-bar">
        <button onClick={() => this.resetArray()}>Shuffle</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.pancakeSort()}>Pancake Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
      </div>
      {
        array.map((value, idx) => (<div className="array-container">
          <div className="numbers">{value}</div>
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
