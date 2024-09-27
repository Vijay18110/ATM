import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import Buttton from '../../widgets/Buttton';
import { useNavigate, useParams } from 'react-router-dom';

const Withdraw = () => {
    const params = useParams()
    const [text, settext] = useState(0);
    const [users, setUser] = useState([]);
    const [pinno, setPinno] = useState("");
    const [bank, SetBank] = useState("");
    const Navigate = useNavigate()
    const fncontinue = async () => {
        var allusers = JSON.parse(localStorage.getItem("users"));
        var user = allusers.filter((data) => { return (data.bankname === bank) });
        var updatedusers;
        var userremaining = allusers.filter((data) => { return ((data.bankname !== bank)) })
        if (user) {
            if (user[0].amount < text) {
                alert("insufficient balance")
                Navigate('/')
            }
            else {
                if (user[0].pin === pinno) {
                    user[0].amount = user[0].amount - text;
                    updatedusers = [...userremaining, ...user];
                    await localStorage.setItem("users", JSON.stringify(updatedusers));
                    Navigate('/withrawdone')
                }
                else {
                    alert("please enter valid pin")
                }

            }
        }

    }


    const top = useRef();
    const clear = () => {
        const len = text.length;
        settext(text.replace(text.charAt(len - 1), ""));
    }
    const cancle = () => {
        settext("")
    }
    const [checkamount, setCheckamount] = useState(false);
    const [minus, setPressminus] = useState(false);
    const check = (e) => {
        if (e.keyCode == 189) {
            setCheckamount(true)
            cancle();
        }
        else {
            setCheckamount(false)
        }
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("users")));
    }, [])
    const onkeydown = (e) => {
        if (e.keyCode == 189) {
            setPressminus(true)
            cancle();
        }
    }
    return (
        <div className='container'>
            <div ref={top} >
                <div style={{ marginBottom: "10px" }} className='inputContainer'>
                    <select onChange={(e) => SetBank(e.target.value)} className='input' name="" id="">
                        <option value="">select bank</option>
                        {
                            users && users.map((item) => {
                                return (
                                    <option value={item.bankname}>{item.bankname}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div style={{ marginBottom: "10px" }} className='inputContainer'>
                    <input onKeyDown={(e) => check(e)} value={text} onChange={(e) => settext(e.target.value)} className='input' type="number" name="" id="" placeholder='Enter Amount to withdraw' />
                </div>
                <div className='inputContainer'>
                    <input onKeyDown={(e) => onkeydown(e)} value={pinno} onChange={(e) => setPinno(e.target.value)} className='input' type="number" name="" id="" placeholder='Enter pin' />
                </div>
                {minus && pinno.length != 4 && <p>please enter valid pin</p>}
                {checkamount ? <div className='error'>please enter amount to withdraw</div> : ""}
                <div className='buttons'>
                    <Buttton fn={clear} color="#1c191a" val={text.length} name="CLEAR"> </Buttton>
                    <Buttton fn={cancle} color="#a3213d" val={text.length} name="CANCLE"></Buttton>
                    <Buttton fn={fncontinue} color="#21a32e" val={text > 0 && pinno.length == 4} name="CONTINUE"></Buttton>
                </div>
            </div>
        </div >
    )
}

export default Withdraw