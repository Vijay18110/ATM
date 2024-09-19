import React from 'react';
import './button.css';
const Buttton = (props) => {
    return (
        <button disabled={props.val ? false : true} onClick={() => { props.fn() }} style={{ backgroundColor: props.color, width: props.width }} className='btns'>
            {props.name}
        </button>
    )
}
export default Buttton;