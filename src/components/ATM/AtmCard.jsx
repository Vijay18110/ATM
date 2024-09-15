import React, { useEffect, useRef } from 'react'
import './atccard.css'
import { FaUserCircle } from "react-icons/fa";
import Button2 from '../../widgets/Button2';
import cardimg from '../../assets/card.png'
const AtmCard = (props) => {

    const refbalance = useRef();
    const refhide = useRef();
    const refhideclose = useRef()
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

    return (
        <div className='atmcontainer'>
            <div className='atmcontainercol1'>
                <i><FaUserCircle></FaUserCircle></i>
                <div className='btn'>
                    <Button2 logout={props.logout} name="logout" bgcolor="#d70026" border="1px solid #d70026"></Button2>
                    <Button2 logout={props.withdraw} name="withdraw" bgcolor="#145226" border="1px solid #145226"></Button2>
                </div>
            </div>
            <div class="userdetail">
                <p class="name">Vijay raj</p>
                <p class="phone">+91 9264996623</p>
                <p class="bank">axis</p>
                <p class="type">current Account</p>
            </div>
            <div className='btn2 balance' ref={refbalance}>
                Account Balance: ₹ 10000000
            </div>
            <div className='btn2' onClick={showbalance} ref={refhide}>
                <Button2 name="check balance" width="220px" bgcolor="#edb82d" border="1px solid #edb82d"></Button2>
            </div>
            <div className='btn2' onClick={hidebalance} ref={refhideclose} style={{ display: "none" }}>
                <Button2 name="close" width="200px" bgcolor="#d70026" border="1px solid #d70026"></Button2>
            </div>
            <div className='carddetail'>
                <div>
                    <span className='top'>HDFC</span>
                    <span className='middle'>VISA</span>
                    <span className='middlebottom'>99999999999999999999</span>
                    <div className='bottomcont'>
                        <div>
                            <span>VALID</span> <span>THRU</span>

                        </div>
                        <span>09/2030</span>

                    </div>
                    <img src={cardimg} alt="" />
                </div>
            </div>
            <div className='btn2' style={{}}>
                <Button2 logout={props.update} name="update pin" width="200px" bgcolor="lightblue" border="1px solid lightblue"></Button2>
            </div>
        </div>
    )
}

export default AtmCard