import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import '../Update/Update.css'
import Button2 from '../../widgets/Button2'
import { useNavigate, useParams } from 'react-router-dom'
const NewPin = (props) => {
    const [pass, setPass] = useState('');
    const params = useParams();
    const Navigate = useNavigate()

    const [cpass, setCpass] = useState('');
    const updated = () => {
        var allusers = JSON.parse(localStorage.getItem("users"));
        var user = allusers.filter((data) => { return ((data.cardnumber === params.card)) })
        if (user) {
            user[0].pin = pass;
        }
        // console.log([...user])

        localStorage.setItem("users", JSON.stringify(user))
        Navigate('/done')
    }
    return (
        <div className='containerchangepin'>
            <div className='heading'>Set Your ATM Pin </div>
            <div className='form-group2'>
                <label htmlFor="oldpin"> Enter New ATM  Pin</label>
                <input required onChange={(e) => setPass(e.target.value)} id="oldpin" className='password' type="tel" name="" placeholder='New pin' />
            </div>

            <div className='form-group2'>
                <label htmlFor="oldpin">  Confirm New ATM  Pin</label>
                <input required onChange={(e) => setCpass(e.target.value)} id="oldpin" className='password' type="tel" name="" placeholder='confirm' />

            </div>
            {(cpass != pass && cpass.length > 0) && <h1>password not match </h1>}

            <div className='buttons'>
                <Button2 return={pass.length == 0} logout={props.close} border="#a3213d" bgcolor="#a3213d" color="#1c191a" name="close"> </Button2>
                <Button2 return={(cpass !== pass || (cpass <= 0 && pass <= 0))} logout={updated} border="#21a32e" bgcolor="#21a32e" color="#a3213d" name="next"></Button2>
            </div>

        </div>
    )
}

export default NewPin