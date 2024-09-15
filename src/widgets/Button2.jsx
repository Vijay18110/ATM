import React from 'react'
import './button2.css'
const Button2 = (props) => {
    return (
        <button onClick={props.logout} style={{ width: props.width, backgroundColor: props.bgcolor, border: props.border }} className='login'>{props.name}</button>
    )
}
export default Button2