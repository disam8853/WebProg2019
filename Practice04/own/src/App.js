import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Main from './containers/main.js'
import Footer from './containers/footer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: props.items,
                  id: -1,
                  status: 0
                };
  }
  pressHandler = e => {
    if (e.key === "Enter" && e.target.value !== '') {
      const value = e.target.value;
      e.target.value = "";
      // e.target.blur();
      let newItem = {id: this.state.id+1, text: value, isComplete: false};
      this.setState(state => state.items.push(newItem));
      this.setState(state => ({id: state.id+1}))
    }
  }
  complete = target_id => {
    for (var i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === target_id) {
        this.setState(state => state.items[i].isComplete = !state.items[i].isComplete);
        break;
      }
    }
  }
  delete = target_id => {
    this.setState(state => ({
      items: state.items.filter(el => el.id !== target_id)
    }));
  }
  changeStatus = s => {
    this.setState(state => ({status: s}));
  }
  clearComplete = () => {
    this.setState(state => ({
      items: state.items.filter(el => el.isComplete === false)
    }));
  }
  render() {
    let displayItem;
    if (this.state.status === 0) {
      // all
      displayItem = this.state.items;
    }
    else if (this.state.status === 1) {
      // active
      displayItem = this.state.items.filter(el => el.isComplete === false);
    }
    else {
      // complete
      displayItem = this.state.items.filter(el => el.isComplete === true);
    }
    return (
      <div className="todo-app__root">

        <Header text="todos"/>

        <Main items={displayItem} pressHandler={this.pressHandler} complete={this.complete} delete={this.delete}/>

        <Footer len={this.state.items.filter(el => el.isComplete === false).length} changeStatus={this.changeStatus} clearComplete={this.clearComplete}/>
    </div>
    );
  }
}

export default App;
