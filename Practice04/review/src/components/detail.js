import React from 'react'

export default ({item}) => {
    if(item.isComplete) {
        return (
            <h1 className="todo-app__item-detail" style={{
            textDecoration: 'line-through',
            opacity: 0.5
            }}>{item.text}</h1>
        )
    }
    else {
        return (
            <h1 className="todo-app__item-detail" style={{
                textDecoration: '',
                opacity: 1.0
            }}>{item.text}</h1>
        )
    }
}
