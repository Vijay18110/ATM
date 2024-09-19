import React, { useEffect, useRef, useState } from 'react'
import './atccard.css'
import { FaUserCircle } from "react-icons/fa";
import Button2 from '../../widgets/Button2';
import cardimg from '../../assets/card.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const AtmCard = (props) => {
    const [user, setUser] = useState("");
    const params = useParams();
    const location = useLocation();
    const logout = () => {
        navigate('/')
    }
    const withdraw = () => {
        navigate('/withdraw/' + user.cardnumber);
    }
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('users'));


        setUser(users.find((item) => item.cardnumber === params.card && item.pin === params.pin))
    }, [])


    const refbalance = useRef();
    const refhide = useRef();
    const refhideclose = useRef()
    const navigate = useNavigate()
    const showbalance = () => {
        refbalance.current.style.display = "block";
        refhide.current.style.display = "none"
        refhideclose.current.style.display = "block"
    }
    const hidebalance = () => {
        refhide.current.style.display = "block"
        refbalance.current.style.display = "none";
        refhideclose.current.style.display = "none"
    }
    const update = () => {
        navigate('/update/pin/' + user.cardnumber + "/" + user.pin)
    }
    return (
        <div className='atmcontainer'>
            <div className='atmcontainercol1'>
                <i><FaUserCircle></FaUserCircle></i>
                <div className='btn'>
                    <Button2 logout={logout} name="logout" bgcolor="#d70026" border="1px solid #d70026"></Button2>
                    <Button2 logout={withdraw} name="withdraw" bgcolor="#145226" border="1px solid #145226"></Button2>
                </div>
            </div>
            <div class="userdetail">
                <p class="phone">{user.name}</p>

                <p class="phone">{user.number}</p>
                <p class="bank">{user.bankcard}</p>
                <p class="type">{user.banktype}</p>
            </div>
            <div className='btn3 balance' ref={refbalance}>
                Account Balance: ₹ {user.amount}
            </div>
            <div className='btn3' onClick={showbalance} ref={refhide}>
                <Button2 name="check balance" width="220px" bgcolor="#edb82d" border="1px solid #edb82d"></Button2>
            </div>
            <div className='btn3' onClick={hidebalance} ref={refhideclose} style={{ display: "none" }}>
                <Button2 name="close" width="200px" bgcolor="#d70026" border="1px solid #d70026"></Button2>
            </div>
            <div className='carddetail'>
                <div>
                    <span className='top'>{user.bankname}</span>
                    <span className='middle'>{user.cardtype}</span>
                    <span className='middlebottom'>{user.cardnumber}</span>
                    <div className='bottomcont'>
                        <div>
                            <span>VALID</span> <span>THRU</span>

                        </div>
                        <span>{user.expiry}</span>

                    </div>
                    <img src={cardimg} alt="" />
                </div>
            </div>
            <div className='btn2' style={{}}>
                <Button2 logout={update} name="update pin" width="200px" bgcolor="lightblue" border="1px solid lightblue"></Button2>
            </div>
        </div>
    )
}

export default AtmCard