import React from 'react'
import Button from '../components/button'
import Input from '../components/input'
import TodoItem from '../components/todoItem'

class TodoList extends React.Component  {
    constructor(props) {
        super(props)
        this.title = 'todos'
        let it = new Item('TodoList comment: 2019/04/02 09:00 p.m.')
        this.todoList = [it]
        this.state = {type: 'all'}
    }
    inputHandler = event => {
        if (event.key === "Enter" && event.target.value !== '') {
            let item = new Item(event.target.value)
            this.todoList.push(item)
            event.target.value = ''
            this.setState(state => ({type: state.type}))
            // I don't know how to rerender so I use setState to rerender
        }
    }
    allHandler = () => this.setState(state => ({type: 'all'}))
    activateHandler = () => this.setState(state => ({type: 'activate'}))
    completeHandler = () => this.setState(state => ({type: 'complete'}))
    deleteItemHandler = e => {
        let item = e.target.parentNode
        let curId = item.childNodes[0].childNodes[0].id
        this.todoList.splice(curId, 1)
        this.setState(state => ({type: state.type}))
    }
    checkedHandler = e => {
        let curId = e.target.parentNode.parentNode.childNodes[0].childNodes[0].id;
        this.todoList[curId].isComplete = !this.todoList[curId].isComplete
        this.setState(state => ({type: state.type}))
    }
    clearHandler = () => {
        this.todoList = this.todoList.filter(ele => !ele.isComplete)
        this.setState(state => ({type: state.type}))
    }

    render() {
        return (
            <div id="root" className="todo-app__root">
                <header className="todo-app__header">
                    <h1 className="todo-app__title">{this.title}</h1>
                </header>
                <section className="todo-app__main">
                    <Input className="todo-item-input" placeholder="What needs to be done?"
                           id="todo-input" onKeyPress={this.inputHandler} />
                </section>
                <footer id="todo-footer" className="todo-app__footer">
                    <div className="todo-app__total"><span id="todo-count">
                        {this.todoList.filter(ele => !ele.isComplete).length}</span> left</div>
                    <div className="todo-app__view-buttons">
                        <Button text="All" onClick={this.allHandler} />
                        <Button text="Activate" onClick={this.activateHandler} />
                        <Button text="Complete" onClick={this.completeHandler} />
                    </div>
                <div className="todo-app__clean"><button id="clear" onClick={this.clearHandler}>Clear complete</button></div>
                </footer>
                <TodoItem todoList={this.todoList} type={this.state.type} checkedHandler={this.checkedHandler}
                          deleteItemHandler={this.deleteItemHandler}/>
            </div>
        )
    }
}

class Item {
    constructor(text) {
        this.text = text
        this.isComplete = false
    }
}

export default TodoList

