import React from 'react'
import { useState } from 'react'
import './index.css'
import Button2 from '../../widgets/Button2'
import { useNavigate, useParams } from 'react-router-dom'
const Update = (props) => {
    const Navigate = useNavigate();
    const params = useParams();
    const [data, setdata] = useState("");
    const check = (e) => {
        setdata(e.target.value);
        if (data === "-") {
            alert("enter valid  pin")
        }
    }
    const next = () => {
        if (params.pin === data) {
            Navigate('/update/pin/' + params.card + "/" + data, { replace: true });
        }
        else {
            alert("please enter valid old pin", { replace: true })
        }
    }
    const close = () => {
        Navigate('/atm/' + params.card + "/" + params.pin, { replace: true })
    }

    return (
        <div className='containerchangepin'>
            <div className='heading'> Change Your ATM Pin</div>
            <div className='form-group2'>
                <label htmlFor="oldpin"> old pin</label>
                <input onChange={(e) => check(e)} id="oldpin" className='password' type="number" name="" placeholder='Enter your Old' />
            </div>
            <div className='buttonscont'>
                <Button2 logout={close} border="#a3213d" bgcolor="#a3213d" fn={close} color="#1c191a" name="close"> </Button2>
                <Button2 logout={next} border="#21a32e" bgcolor="#21a32e" color="#a3213d" name="next"></Button2>
            </div>

        </div>
    )
}

export default Update