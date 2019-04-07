import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "0",
      calcNum: "",
      operator: ""
    };
  }

  resetState = () => {
    this.setState({ number: "0" });
  }

  addNumber = (e) => {
    let newNum;
    if (this.state.operator === "" || this.state.operator === "=") {
      newNum = this.state.number + e;
      newNum = parseInt(newNum);
      this.setState({
        number: newNum.toString(),
        operator: ""
      });
    } else {
      newNum = parseInt(this.state.calcNum + e);
      this.setState({ calcNum: newNum.toString() });
    }
  }

  neg = () => {
    if (this.state.calcNum === "") {
      if (this.state.number[0] === "-") {
        let n = this.state.number.substring(1, this.state.number.length);
        this.setState({
          number: n
        });
      }
      else {
        let n = "-" + this.state.number;
        this.setState({
          number: n
        });
      }
    }
    else {
      if (this.state.calcNum[0] === "-") {
        let n = this.state.calcNum.substring(1, this.state.calcNum.length);
        this.setState({
          calcNum: n
        });
      }
      else {
        let n = "-" + this.state.calcNum;
        this.setState({
          calcNum: n
        });
      }
    }
  }

  setOperator = (e) => {
    this.setState({ operator: e });
  }

  calculate = (e) => {
    const n1 = parseInt(this.state.number),
      n2 = parseInt(this.state.calcNum);
    let ans = this.state.number;

    if (this.state.operator === "+") {
      ans = n1 + n2;
    } else if (this.state.operator === "-") {
      ans = n1 - n2;
    } else if (this.state.operator === "X") {
      ans = n1 * n2;
    } else if (this.state.operator === "÷") {
      ans = Math.round(n1 / n2 * 100) / 100
    }

    this.setState({
      number: ans.toString(),
      calcNum: "",
      operator: e
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.calcNum === "" ? this.state.number : this.state.calcNum}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={() => this.resetState()}>AC</CalcButton>
            <CalcButton onClick={() => this.neg()}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.setOperator('÷')}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.addNumber('7')}>7</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.addNumber('8')}>8</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.addNumber('9')}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.setOperator('X')}>X</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.addNumber('4')}>4</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.addNumber('5')}>5</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.addNumber('6')}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.setOperator('-')}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={() => this.addNumber('1')}>1</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.addNumber('2')}>2</CalcButton>
            <CalcButton className="calc-number" onClick={() => this.addNumber('3')}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.setOperator('+')}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={() => this.addNumber('0')}>0</CalcButton>
            <CalcButton className="calc-number" onClick={this.showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" onClick={() => this.calculate("=")}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;