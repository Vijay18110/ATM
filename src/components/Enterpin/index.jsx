import React from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton'
import { generatePath, useNavigate, useParams } from 'react-router-dom';
const Enterpin = (props) => {
    const [text, settext] = useState("");
    const params = useParams()
    const navigate = useNavigate();
    const clear = () => {
        const len = text.length;
        settext(text.replace(text.charAt(len - 1), ""));
    }
    const cancle = () => {
        settext("")
    }
    const fncontinue = () => {

        const users = JSON.parse(localStorage.getItem("users"));

        const existinguser = users.find((item) => item.cardnumber === params.card && item.pin === text);
        if (existinguser) {
            navigate('/atm/' + params.card + "/" + +text);

        }


    }

    return (
        <div className='container'>
            <div>
                <div className='inputContainer'>
                    <input value={text} onChange={(e) => settext(e.target.value)} className='input' type="number" name="" id="" placeholder='Enter Your pin' />
                </div>
                {text.length > 0 && text.length !== 4 ? <div className='error' >please Enter pin (4 Digits)</div> : ""}
                <div className='buttons'>
                    <Buttton fn={clear} color="#1c191a" val={text.length} name="CLEAR"> </Buttton>
                    <Buttton fn={cancle} color="#a3213d" val={text.length} name="CANCLE"></Buttton>
                    <Buttton fn={fncontinue} color="#21a32e" val={text.length == 4} name="CONTINUE"></Buttton>
                </div>
            </div>
        </div>
    )
}

export default Enterpin