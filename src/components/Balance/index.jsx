import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Balance = () => {
    const [pinno, setPinno] = useState("");
    const params = useParams()
    const [bank, SetBank] = useState("");
    const [text, settext] = useState(null);
    const [Cards, setCards] = useState([]);
    const [Users, setUser] = useState([]);
    const Navigate = useNavigate()
    const fncontinue = async () => {
        var allusers = JSON.parse(localStorage.getItem("users"));
        var user = allusers.filter((data) => { return (data.bankname === bank && data.pin == pinno) });
        setUser(user);
        settext(user[0].amount);
    }
    const close = () => {
        Navigate('/');
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
                                );
                            })
                        }
                    </select>
                </div>
                <div style={{ marginBottom: "10px" }} className='inputContainer'>
                    <input value={pinno} onChange={(e) => setPinno(e.target.value)} className='input' type="number" name="" id="" placeholder='enter pin' />
                </div>
                {pinno.length != 4 && pinno.length > 0 && <p>enter valid pin</p>}
                <div className='inputContainer'>
                    <input value={Users.length ? text : "enter valid pin"} className='input' type="text" name="" id="" placeholder='select bank and enter' />
                </div>
                <div className='buttons'>
                    <Buttton fn={close} val="true" color="#a3213d" name="close"></Buttton>
                    <Buttton fn={fncontinue} val={pinno.length == 4} border="#21a32e" color="#21a32e" name="check"></Buttton>
                </div>
            </div>
        </div >
    )
}
export default Balance;