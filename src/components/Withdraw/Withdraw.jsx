import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton';

const Withdraw = (props) => {
    const [reg, setReg] = useState("");
    useEffect(() => {
        const reg = new RegExp('^\d+$');
        setReg(reg);
    }, [])

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
                    <input value={text} onChange={(e) => settext(e.target.value)} className='input' type="tel" name="" id="" placeholder='Enter Amount to withdraw' />
                </div>
                {text ? <div className='error'>please enter amount to withdraw</div> : ""}
                <div className='buttons'>
                    <Buttton fn={clear} color="#1c191a" val={text.length} name="CLEAR"> </Buttton>
                    <Buttton fn={cancle} color="#a3213d" val={text.length} name="CANCLE"></Buttton>
                    <Buttton fn={props.fncontinue} color="#21a32e" val={text.length == 16} name="CONTINUE"></Buttton>
                </div>
            </div>
        </div >
    )
}

export default Withdraw