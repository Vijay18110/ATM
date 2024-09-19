import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton';
import { useNavigate, useParams } from 'react-router-dom';

const Withdraw = () => {
    const params = useParams()
    const [amount, setAmount] = useState("");
    const Navigate = useNavigate()
    const fncontinue = () => {
        var allusers = JSON.parse(localStorage.getItem("users"));
        var user = allusers.filter((data) => { return ((data.cardnumber === params.card)) })
        if (user) {
            if (user[0].amount < amount) {
                alert("insufficient balance")
            }
            user[0].amount = user[0].amount - amount;
        }


        localStorage.setItem("users", JSON.stringify(user))
        Navigate('/')
    }

    const [text, settext] = useState("");
    const top = useRef();
    const clear = () => {
        const len = text.length;
        settext(text.replace(text.charAt(len - 1), ""));
    }
    const cancle = () => {
        settext("")
    }

    return (
        <div className='container'>
            <div ref={top} >
                <div className='inputContainer'>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} className='input' type="tel" name="" id="" placeholder='Enter Amount to withdraw' />
                </div>
                {text ? <div className='error'>please enter amount to withdraw</div> : ""}
                <div className='buttons'>
                    <Buttton fn={clear} color="#1c191a" val={amount.length} name="CLEAR"> </Buttton>
                    <Buttton fn={cancle} color="#a3213d" val={amount.length} name="CANCLE"></Buttton>
                    <Buttton fn={fncontinue} color="#21a32e" val={amount.length} name="CONTINUE"></Buttton>
                </div>
            </div>
        </div >
    )
}

export default Withdraw