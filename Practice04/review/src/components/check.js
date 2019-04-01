import React from 'react'
import Input from './input'

export default ({item, checkedHandler, id}) => {
    if(item.isComplete) {
        return (
            <div className="todo-app__checkbox">
                <Input id={id} type="checkbox" onClick={checkedHandler} /><label htmlFor={id} style={{background: '#26ca299b'}}></label>
            </div>
        )
    }
    else {
        return (
            <div className="todo-app__checkbox" style={{background: '#ddd'}}>
                <Input id={id} type="checkbox" onClick={checkedHandler} /><label htmlFor={id}></label>
            </div>
        )
    }
}
