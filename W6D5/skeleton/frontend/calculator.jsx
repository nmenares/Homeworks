import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", result: 0, record: []};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mul = this.mul.bind(this);
    this.div = this.div.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e){
    this.setState({ num1: e.target.value });
  }

  setNum2(e){
    this.setState({ num2: e.target.value });
  }

  add(e){
    e.preventDefault();
    const prev = this.state.record;
    prev.push(this.state.result);
    this.setState((prevState) => {
      return {
        num1: prevState.num1,
        num2: prevState.num2,
        result: parseInt(prevState.num1, 10) + parseInt(prevState.num2, 10),
        record: prevState.record
      };
    });
  }

  sub(e){
    e.preventDefault();
    const prev = this.state.record;
    prev.push(this.state.result);
    this.setState((prevState) => {
      return {
        num1: prevState.num1,
        num2: prevState.num2,
        result: parseInt(prevState.num1, 10) - parseInt(prevState.num2, 10),
        record: prevState.record
      };
    });
  }

  mul(e){
    e.preventDefault();
    const prev = this.state.record;
    prev.push(this.state.result);
    this.setState(( prevState) => {
      return {
        num1: prevState.num1,
        num2: prevState.num2,
        result: parseInt(prevState.num1, 10) * parseInt(prevState.num2, 10),
        record: prevState.record
      }
    })
  }

  div(e){
    e.preventDefault();
    const prev = this.state.record;
    prev.push(this.state.result);
    this.setState((prevState) => {
      return {
        num1: prevState.num1,
        num2: prevState.num2,
        result: parseInt(prevState.num1, 10) / parseInt(prevState.num2, 10),
        record: prevState.record
      }
    })
  }

  clear(e){
    e.preventDefault();
    const prev = this.state.record;
    prev.push(this.state.result);
    this.setState((prevState) => {
      return {
        num1: "",
        num2: "",
        result: 0,
        record: []
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <label>Number 1:
          <input onChange={this.setNum1} type="text" value={this.state.num1}></input>
        </label>
        <br/>
        <label>Number 2:
          <input onChange={this.setNum2} type="text" value={this.state.num2}></input>
        </label>

        <br/>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.mul}>*</button>
        <button onClick={this.div}>/</button>
        <h1>Result: {this.state.result}</h1>
        <button onClick={this.clear}>Clear</button>
        <h2>Record:</h2>
        <ul>
          <h3>{this.state.record.map ((el, idx)=> <li key={idx}>{el}</li>)}</h3>
        </ul>
      </div>
    );
  }
}


export default Calculator;
