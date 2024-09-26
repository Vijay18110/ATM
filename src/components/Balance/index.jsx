import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Balance = () => {
    const params = useParams()
    const [bank, SetBank] = useState("");
    const [text, settext] = useState("");
    const [Cards, setCards] = useState([]);
    const Navigate = useNavigate()
    const fncontinue = async () => {
        var allusers = JSON.parse(localStorage.getItem("users"));
        var user = allusers.filter((data) => { return (data.bankname === bank) });
        settext(user[0].amount);
    }

    const close = () => {
        Navigate('/atmcards');
    }
    useEffect(() => {
        setCards(JSON.parse(localStorage.getItem("users")));
    }, [])
    return (
        <div className='container'>
            <div>
                <div style={{ marginBottom: "10px" }} className='inputContainer'>
                    <select onChange={(e) => SetBank(e.target.value)} className='input' name="" id="">
                        <option value="">select bank</option>
                        {
                            Cards && Cards.map((item) => {
                                return (
                                    <option value={item.bankname}>{item.bankname}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='inputContainer'>
                    <input value={text} className='input' type="number" name="" id="" placeholder='select bank and click to check button' />
                </div>
                <div className='buttons'>
                    <Buttton fn={close} val="true" color="#a3213d" name="close"></Buttton>
                    <Buttton fn={fncontinue} val="true" color="#a3213d" name="check"></Buttton>
                </div>
            </div>
        </div >
    )
}
export default Balance;