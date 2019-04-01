import React from 'react'
import X_png from '../img/x.png'
import CheckBox from './check'
import Detail from './detail'

class TodoItem extends React.Component {
    render() {
        if(this.props.todoList.length === 0) {
            return (
                <ul style={{display: 'none'}}></ul>
            )
        }
        else {
            let displayList = this.props.todoList
            if(this.props.type === 'activate') {
                displayList = displayList.filter(ele => !ele.isComplete)
            }
            else if (this.props.type === 'complete') {
                displayList = displayList.filter(ele => ele.isComplete)
                
            }
            
            return (
                <ul id="todo-list" className="todo-app__list">
                    {displayList.map((item, i) =>
                        <li className="todo-app__item">
                            <CheckBox item={item} checkedHandler={this.props.checkedHandler} id={i} />
                            <Detail item={item} />
                            <img src={X_png} className="todo-app__item-x" onClick={this.props.deleteItemHandler} />
                        </li>
                    )}
                </ul>
            )
        }
    }
}

export default TodoItem;