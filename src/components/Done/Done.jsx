import React from 'react'
import '../Update/Update.css'
import Button2 from '../../widgets/Button2'



const Done = (props) => {
    return (
        <div className='containerchangepin'>
            <div className="heading"> {props.val}</div>
            <Button2 logout={props.logout} width="100px" name="CLOSE" bgcolor="#a3213d"></Button2>
        </div>
    )
}

export default Done