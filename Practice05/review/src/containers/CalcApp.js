import React from 'react';

import CalcButton from '../components/CalcButton';
import { stat } from 'fs';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      curState: 0,
      OpType: null,
      prevNum: null
    };
  }

  resetState = () => {
    this.setState(() => ({
      display: 0,
      curState: 0,
      OpType: null,
      prevNum: null
    }))
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }
  pressedBtn = (event) => {
    const btnCont = event.target.innerHTML;
    let BtnisOP = isNaN(parseInt(btnCont));
    //op, equal, num
    //0, 1 ,2
    const btnType = (BtnisOP) ? ((btnCont === '=') ? 1 : 0) : 2;
    this.setState((state) => {
      if (state.curState === 0) {
        //initial state
        if (btnType === 0) {
          return { curState: 1, OpType: btnCont, prevNum: state.display };
        }
        else if (btnType === 1) {
          return { curState: 3 };
        }
        else if (btnType === 2) {
          return { display: state.display * 10 + parseInt(btnCont) };
        }
      }
      else if (state.curState === 1) {
        //trans state
        if (btnType === 0) {
          return { OpType: btnCont }
        }
        else if (btnType === 1) {
          let newDisplayNum = null;
          if (state.OpType === '+') {
            newDisplayNum = state.display * 2;
          }
          else if (state.OpType === '-') {
            newDisplayNum = 0;
          }
          else if (state.OpType === 'x') {
            newDisplayNum = state.display * state.display
          }
          else if (state.OpType === '÷') {
            newDisplayNum = 1;
          }
          return { curState: 3, display: newDisplayNum, prevNum: state.display };
        }
        else if (btnType === 2) {
          return { display: parseInt(btnCont), curState: 2 };
        }
      }
      else if (state.curState === 2) {
        if (btnType === 0) {
          let newDisplayNum = null;
          if (state.OpType === '+') {
            newDisplayNum = state.prevNum + state.display;
          }
          else if (state.OpType === '-') {
            newDisplayNum = state.prevNum - state.display;
          }
          else if (state.OpType === 'x') {
            newDisplayNum = state.prevNum * state.display;
          }
          else if (state.OpType === '÷') {
            newDisplayNum = state.prevNum / state.display;
          }
          return { curState: 1, display: newDisplayNum, prevNum: newDisplayNum, OpType: btnCont };
        }
        else if (btnType === 1) {
          let newDisplayNum = null;
          if (state.OpType === '+') {
            newDisplayNum = state.prevNum + state.display;
          }
          else if (state.OpType === '-') {
            newDisplayNum = state.prevNum - state.display;
          }
          else if (state.OpType === 'x') {
            newDisplayNum = state.prevNum * state.display;
          }
          else if (state.OpType === '÷') {
            newDisplayNum = state.prevNum / state.display;
          }
          return { curState: 3, display: newDisplayNum, prevNum: state.display };
        }
        else if (btnType === 2) {
          return { display: state.display * 10 + parseInt(btnCont) };
        }
      }
      else if (state.curState === 3) {
        //equal state
        if (btnType === 0) {
          return { curState: 1, OpType: btnCont };
        }
        else if (btnType === 1) {
          let newDisplayNum = null;
          if (state.OpType === '+') {
            newDisplayNum = state.prevNum + state.display;
          }
          else if (state.OpType === '-') {
            newDisplayNum = state.display - state.prevNum;
          }
          else if (state.OpType === 'x') {
            newDisplayNum = state.prevNum * state.display;
          }
          else if (state.OpType === '÷') {
            newDisplayNum = state.display / state.prevNum;
          }
          return { display: newDisplayNum };
        }
        else if (btnType === 2) {
          return { display: parseInt(btnCont) };
        }
      }
    })
  }
  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.display}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressedBtn}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressedBtn}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressedBtn}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressedBtn}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressedBtn}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressedBtn}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressedBtn}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressedBtn}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressedBtn}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.pressedBtn}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressedBtn}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.pressedBtn}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressedBtn}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="bigger-btn" onClick={this.pressedBtn}>0</CalcButton>
            <CalcButton className="calc-number" onClick={this.showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.pressedBtn}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
