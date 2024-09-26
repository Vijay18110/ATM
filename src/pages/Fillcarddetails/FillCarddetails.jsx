import React, { useEffect, useRef, useState } from 'react'
import './fillCarddetails.css'
import { useNavigate, useParams } from 'react-router-dom';
const FillCarddetails = (props) => {
    const navigate = useNavigate();
    const allusers = JSON.parse(localStorage.getItem("users"));
    const [users, setUsers] = useState(allusers || []);
    const [cardtype, setcardtype] = useState("");
    const [bankname, setbankname] = useState("");
    const [number, setnumber] = useState("");
    const [pin, setpin] = useState("");
    const [banktype, setbanktype] = useState("");
    const [expiry, setexpiry] = useState("");
    const [amount, setamount] = useState("");
    const [name, setname] = useState("");
    const [bankcard, setbankcard] = useState("");
    const params = useParams();
    const bankName = useRef();
    useEffect(() => {
        if (users.length) {
            localStorage.setItem("users", JSON.stringify(users))
        }
    }, [users])
    const savedata = async () => {
        // const allusers = JSON.parse(localStorage.getItem('users'))
        // var user;
        // if (allusers.length) {
        //     user = allusers.filter((item) => item.bankname === bankname);
        //     if (user.length) {
        //         alert("you have already a ATM card for this bank. please enter another bank")
        //         bankName.current.value = "";
        //     }
        // }

        if (cardtype == "") {
            alert("fill all the fields carefully")
        }
        else if (bankname === "") {

            alert("fill all the fields carefully")
        } else if (name === "") {

            alert("fill all the fields carefully")
        } else if (bankcard === "") {

            alert("fill all the fields carefully")
        } else if (banktype === "") {

            alert("fill all the fields carefully")
        }
        else if (pin === "") {

            alert("fill all the fields carefully")
        } else if (number === "") {

            alert("fill all the fields carefully")
        } else if (expiry === "") {

            alert("fill all the fields carefully")
        } else if (amount === "") {

            alert("fill all the fields carefully")
        }
        else {
            await setUsers([...users, { cardtype: cardtype, bankname: bankname, number: number, pin: pin, banktype: banktype, expiry: expiry, amount: amount, name: name, cardnumber: params.card, bankcard: bankcard }])
            onhandleclick();
        }


    }
    const onhandleclick = () => {
        navigate('/pingenerated', { replace: true })
    }
    const logout = () => {
        navigate('/', { replace: true });
    }
    return (
        <>
            <div className='cardcontainer'>
                <div className="container1">
                    <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardtype"> Card Type<span>*</span></label>
                            <input onChange={(e) => setcardtype(e.target.value)} type="text" id='cardtype' placeholder='VISA,RUPAY, etc.....' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard">  Bank Card <span>*</span></label>
                            <input onChange={(e) => setbankcard(e.target.value)} type="text" id='bankcard' placeholder='HDFC,AXIS etc.....' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardtype"> Card Numbar <span>*</span></label>
                            <input onChange={(e) => setcardnumber(e.target.value)} type="text" id='cardtype' readOnly placeholder={"xxxxxxxxxxxx" + params.card.substring(12, 16)} />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard"> expiry<span>*</span></label>
                            <input onChange={(e) => setexpiry(e.target.value)} type="text" id='bankcard' placeholder='mm/yyyy' />
                        </div>
                    </div> <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardtype"> Name<span>*</span></label>
                            <input onChange={(e) => setname(e.target.value)} type="text" id='cardtype' placeholder='Ex - Vijay raj' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard">   phone<span>*</span></label>
                            <input onChange={(e) => setnumber(e.target.value)} type="number" id='bankcard' placeholder='XXXXXXXX 07' />
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardtype"> Bank Name<span>*</span></label>
                            <input ref={bankName} onChange={(e) => setbankname(e.target.value)} type="text" id='cardtype' placeholder='Bank Of India etc..' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard">  Pin<span>*</span></label>
                            <input onChange={(e) => setpin(e.target.value)} type="number" id='bankcard' placeholder='XXXX' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardnumber"> bank Type<span>*</span></label>
                            <input onChange={(e) => setbanktype(e.target.value)} type="text" id='cardnumber' placeholder='Current,Saving etc..' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard">  Amount<span>*</span></label>
                            <input onChange={(e) => setamount(e.target.value)} type="number" id='bankcard' placeholder='₹XXXXXXXX' />
                        </div>
                    </div>
                </div>
                <div className='btncard1'>
                    <button className='btn1' onClick={savedata} color="#21a32e"> save</button>
                    <button onClick={logout} className='btn5' color="#a3213d"> back</button>
                </div>
            </div >
        </>
    )
}
export default FillCarddetails;