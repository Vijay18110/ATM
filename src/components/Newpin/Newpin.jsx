import React from 'react'
import { useRef, useState } from 'react'
import '../Update/Update.css'
import Button2 from '../../widgets/Button2'


const NewPin = (props) => {
    return (
        <div className='containerchangepin'>
            <div className='heading'>Set Your ATM Pin </div>
            <div className='form-group2'>
                <label htmlFor="oldpin"> Enter New ATM  Pin</label>
                <input id="oldpin" className='password' type="tel" name="" placeholder='New pin' />
            </div>


            <div className='form-group2'>
                <label htmlFor="oldpin">  Confirm New ATM  Pin</label>
                <input id="oldpin" className='password' type="tel" name="" placeholder='confirm' />
            </div>
            <div className='buttons'>
                <Button2 logout={props.close} border="#a3213d" bgcolor="#a3213d" color="#1c191a" name="close"> </Button2>
                <Button2 logout={props.logout} border="#21a32e" bgcolor="#21a32e" color="#a3213d" name="next"></Button2>
            </div>

        </div>
    )
}

export default NewPin