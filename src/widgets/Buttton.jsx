import React from 'react'
import './button.css'
const Buttton = (props) => {
    return (
        <button onClick={() => { props.fn(), props.x() }} style={{ backgroundColor: props.color, width: props.width }} className='btns'>
            {props.name}
        </button>
    )
}
export default Buttton