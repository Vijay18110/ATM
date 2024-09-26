import React from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton'
import { generatePath, replace, useLocation, useNavigate, useParams } from 'react-router-dom';
import Button2 from '../../widgets/Button2';
const ResetNumber = (props) => {
    const [text, settext] = useState("");
    const [counter, setCounter] = useState(3);
    const params = useParams()
    const navigate = useNavigate();
    const { state } = useLocation();
    const cancle = () => {
        navigate('/');
    }
    const clear = () => {
        const users = JSON.parse(localStorage.getItem("users"));
        const user = users.find((item) => item.number == text);
        if (user) {
            navigate('/update/pin/' + user.cardnumber + "/" + user.pin, { replace: true });
        }
    }
    const fncontinue = () => {
        const users = JSON.parse(localStorage.getItem("users"));
        const existinguser = users.find((item) => item.cardnumber === params.card && item.pin === text);
        if (existinguser) {
            if (existinguser.pin === text) {
                navigate('/atm/' + params.card + "/" + +text, { replace: true });
            }
        }
        else {
            if (state == 0) {
                navigate('/block', { replace: true });
            }
            navigate('/wrongpin/' + params.card, { replace: true });
        }
    }
    const updatepin = () => {
        navigate('/resetpin', { replace: true })
    }
    return (
        <div className='container'>
            <div>
                <div className='inputContainer'>
                    <input style={{ width: "100%" }} value={text} onChange={(e) => settext(e.target.value)} className='input' type="number" name="" id="" placeholder='Enter Your mobile number' />
                </div>
                <div style={{ display: "flex" }} className='buttons'>
                    <Button2 logout={clear} bgcolor="#21a32e" border="#21a32e" name="NEXT" width="200px"> </Button2>
                    <Button2 logout={cancle} bgcolor="#a3213d" border="#a3213d" name="CLOSE" width="200px"></Button2>
                </div>
            </div>
        </div>
    )
}
export default ResetNumber;