import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton';
import { useNavigate, useParams } from 'react-router-dom';

const Withdraw = () => {
    const params = useParams()
    const [amount, setAmount] = useState(0);
    const Navigate = useNavigate()
    const fncontinue = () => {
        var allusers = JSON.parse(localStorage.getItem("users"));
        var user = allusers.filter((data) => { return (data.cardnumber === params.card) })
        var updatedusers;
        var userremaining = allusers.filter((data) => { return ((data.cardnumber !== params.card)) })


        if (user) {
            if (user[0].amount < text) {
                alert("insufficient balance")
            }
            user[0].amount = user[0].amount - text;
            console.log(user);

            updatedusers = [...userremaining, ...user];
        }
        localStorage.setItem("users", JSON.stringify(updatedusers));
        Navigate('/withrawdone')
    }

    const [text, settext] = useState(0);
    const top = useRef();
    const clear = () => {
        const len = text.length;
        settext(text.replace(text.charAt(len - 1), ""));
    }
    const cancle = () => {
        settext("")
    }
    const [checkamount, setCheckamount] = useState(false);
    const check = (e) => {
        if (e.keyCode == 189) {
            setCheckamount(true)
            cancle();
        }
        else {
            setCheckamount(false)
        }
    }
    return (
        <div className='container'>
            <div ref={top} >
                <div className='inputContainer'>
                    <input onKeyDown={(e) => check(e)} value={text} onChange={(e) => settext(e.target.value)} className='input' type="number" name="" id="" placeholder='Enter Amount to withdraw' />
                </div>
                {checkamount ? <div className='error'>please enter amount to withdraw</div> : ""}
                <div className='buttons'>
                    <Buttton fn={clear} color="#1c191a" val={text.length} name="CLEAR"> </Buttton>
                    <Buttton fn={cancle} color="#a3213d" val={text.length} name="CANCLE"></Buttton>
                    <Buttton fn={fncontinue} color="#21a32e" val={text > 0} name="CONTINUE"></Buttton>
                </div>
            </div>
        </div >
    )
}

export default Withdraw