import React from 'react'

class Input extends React.Component {
    render() {
        return (
        <input type={this.props.type} className={this.props.className} onKeyPress={this.props.onKeyPress}
               placeholder={this.props.placeholder} id={this.props.id} onClick={this.props.onClick} ></input>
    )}
}

Input.defaultProps = {
    placeholder: '',
    id: '',
    type: 'text'
}

export default Input;