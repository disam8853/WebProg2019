import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total">{this.props.len} left</div>
                <ul className="todo-app__view-buttons">
                    <li><button onClick={() => this.props.changeStatus(0)}>All</button></li>
                    <li><button onClick={() => this.props.changeStatus(1)}>Active</button></li>
                    <li><button onClick={() => this.props.changeStatus(2)}>Complete</button></li>
                </ul>
                <div className="todo-app__clean">
                    <button onClick={() => this.props.clearComplete()}>Clear complete</button>   
                </div>
            </footer>
        );
    }
}

export default Footer