import React, { Component } from 'react';

class Item extends Component {
  render() {
  	let item = this.props.item;
    return (
      <li className="todo-app__item">
	      <div className="todo-app__checkbox">
	        <input type="checkbox" id={item.id} onClick={() => this.props.complete(item.id)} 
	        checked={item.isComplete}
	        />
	        <label htmlFor={item.id}></label>
	      </div>
	      <h1 className="todo-app__item-detail">{item.isComplete ? 
	      	<s style={{opacity: '0.5'}}>{item.text}</s> : item.text}</h1>
	      <img src="/x.png" className="todo-app__item-x" onClick={() => this.props.delete(item.id)}/>
      </li>
    );
  }
}

export default Item