import React from 'react'
import { useRef, useState } from 'react'

import Buttton from '../widgets/Buttton'
const FrontPage = (props) => {


    const [text, settext] = useState("");

    const clear = () => {


        const len = text.length;
        settext(text.replace(text.charAt(len - 1), ""));
    }
    const cancle = () => {
        settext("")

    }
    return (
        <div className='container'>
            <div >
                <div className='inputContainer'>
                    <input value={text} onChange={(e) => settext(e.target.value)} className='input' type="tel" name="" id="" placeholder='Enter Your Card Number' />
                </div>
                {text.length > 0 && text.length !== 16 ? <div className='error' >Please Enter A Valid Card (16 Digits)</div> : ""}
                <div className='buttons'>
                    <Buttton fn={clear} color="#1c191a" val={text.length} name="CLEAR"> </Buttton>
                    <Buttton fn={cancle} color="#a3213d" val={text.length} name="CANCLE"></Buttton>
                    <Buttton fn={props.fncontinue} color="#21a32e" val={text.length == 16} name="CONTINUE"></Buttton>
                </div>
            </div>
        </div>
    )
}

export default FrontPage