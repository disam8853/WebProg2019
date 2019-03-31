import React, { Component } from 'react';
import Item from './item.js'

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { items: props.items };
    // }
    render() {
        return (
            <section className="todo-app__main">
            	<input type="text" className="todo-app__input" onKeyPress={(e) => this.props.pressHandler(e)} placeholder="What needs to be done?"/>

            	<ul className="todo-app__list" id="todo-list">
            		{this.props.items.map( item =>
            			<Item item={item} key={item.id} complete={this.props.complete} delete={this.props.delete}/>
            		)}
            	</ul>

        	</section>
        );
    }
}

export default Main