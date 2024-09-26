import React from 'react'
import { useRef, useState } from 'react'

import Buttton from '../../widgets/Buttton'
import { generatePath, useNavigate } from 'react-router-dom';
const FrontPage = (props) => {
    const [text, settext] = useState("");
    const navigate = useNavigate();
    const clear = () => {
        const len = text.length;
        settext(text.replace(text.charAt(len - 1), ""));
    }
    const cancle = () => {
        settext("")
    }
    const fncontinue = () => {
        var existinguser = null;
        const users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            existinguser = users.find((item) => item.cardnumber === text);
        }
        if (users && existinguser) {
            const res = confirm("this card number is assigned to" + " " + existinguser.bankname + " " + "bank" + "  " + "Are you want to show you card")

            if (res) { navigate("/pin/" + text); }
        }
        else {
            navigate('/fill/details/' + text);
        }
    }
    const [check, setcheck] = useState(false);
    const onkeyup = (e) => {
        if (e.keyCode == 189) {
            alert("enter valid cardno");
            setcheck(true);
        }
        else {
            setcheck(false)
        }
    }
    return (
        <div className='container'>
            <div>
                <div className="inputContainer">
                    <input onKeyDown={(e) => onkeyup(e)} value={text} onChange={(e) => settext(e.target.value)} className="input" type="number" name="" id="" placeholder='Enter Your Card Number' />
                </div>
                {check && <div className='error' >Please Enter A Valid Card (16 Digits)</div>}
                {text.length > 0 && text.length !== 16 ? <div className='error' >Please Enter A Valid Card (16 Digits)</div> : ""}
                <div className="buttons">
                    <Buttton fn={clear} color="#1c191a" val={text.length} name="CLEAR"> </Buttton>
                    <Buttton fn={cancle} color="#a3213d" val={text.length} name="CANCLE"></Buttton>
                    <Buttton check={check} fn={fncontinue} color="#21a32e" val={text.length == 16} name="CONTINUE"></Buttton>
                </div>
            </div>
        </div>
    )
}
export default FrontPage