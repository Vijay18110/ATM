import React from 'react'
import { useRef, useState } from 'react'
import './update.css'

import Button2 from '../../widgets/Button2'
const Update = (props) => {
    return (
        <div className='containerchangepin'>
            <div className='heading'> Change Your ATM Pin</div>
            <div className='form-group2'>
                <label htmlFor="oldpin"> old pin</label>
                <input id="oldpin" className='password' type="tel" name="" placeholder='Enter your Old' />
            </div>
            <div className='buttons'>
                <Button2 logout={props.close} border="#a3213d" bgcolor="#a3213d" fn={close} color="#1c191a" name="close"> </Button2>
                <Button2 logout={props.next} border="#21a32e" bgcolor="#21a32e" color="#a3213d" name="next"></Button2>
            </div>

        </div>
    )
}

export default Update