import React, { useState } from 'react'
import './fillCarddetails.css'
import Buttton from '../widgets/Buttton';
const FillCarddetails = (props) => {
    const [cardtype, setcardtype] = useState("");
    const [bankname, setbankname] = useState("");
    const [number, setnumber] = useState("");
    const [pin, setpin] = useState("");
    const [banktype, setbanktype] = useState("");
    const [expiry, setexpiry] = useState("");
    const [amount, setamount] = useState("");
    const [name, setname] = useState("");
    const [cardnumber, setcardnumber] = useState("");
    const [bankcard, setbankcard] = useState("");
    const obj = {
        name, amount, bankcard, bankname, banktype, cardnumber, cardtype, expiry, pin, number
    }


    const savedata = async () => {
        const res = await fetch("http://localhost:3000/atmcarddata", {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(
                {
                    name: name, amount: amount, bankcard: bankcard, bankname: bankname, banktype: banktype,
                    cardnumber: cardnumber, cardtype: cardtype, expiry: expiry, pin: pin, number: number
                }
            )
        })
        const data = await res.json();
        console.log(data.msg)
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
                            <input onChange={(e) => setcardnumber(e.target.value)} type="text" id='cardtype' placeholder='XXXX XXXX XXXX 1111' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard"> expiry<span>*</span></label>
                            <input onChange={(e) => setexpiry(e.target.value)} type="date" id='bankcard' placeholder='mm/yyyy' />
                        </div>
                    </div> <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardtype"> Name<span>*</span></label>
                            <input onChange={(e) => setname(e.target.value)} type="text" id='cardtype' placeholder='Ex - Vijay raj' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard">   phone<span>*</span></label>
                            <input onChange={(e) => setnumber(e.target.value)} type="tel" id='bankcard' placeholder='XXXXXXXX 07' />
                        </div>
                    </div>
                </div>
                <div className="container2">
                    <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardtype"> Bank Name<span>*</span></label>
                            <input onChange={(e) => setbankname(e.target.value)} type="text" id='cardtype' placeholder='Bank Of India etc..' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard">  Pin<span>*</span></label>
                            <input onChange={(e) => setpin(e.target.value)} type="tel" id='bankcard' placeholder='XXXX' />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="cardnumber"> bank Type<span>*</span></label>
                            <input onChange={(e) => setbanktype(e.target.value)} type="text" id='cardnumber' placeholder='Current,Saving etc..' />
                        </div>
                        <div className='form-control'>
                            <label className='form-lable' htmlFor="bankcard">  Amount<span>*</span></label>
                            <input onChange={(e) => setamount(e.target.value)} type="text" id='bankcard' placeholder='₹XXXXXXXX' />
                        </div>
                    </div>
                </div>
                <div className='btncard'>
                    <Buttton obj={obj} x={props.showcard} fn={savedata} width="100px" name="SAVE" color="#21a32e"></Buttton>
                    <Buttton fn={props.logout} width="100px" name="CLOSE" color="#a3213d"></Buttton>
                </div>
                {/* fn={props.showcard} */}
            </div >
        </>
    )
}

export default FillCarddetails