import React, { useEffect, useRef, useState } from 'react'
import './atccard.css'
import cardimg from '../../assets/card.png'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Nav from '../Navbar';
const AtmCard = (props) => {
    const [user, setUser] = useState([]);
    const logout = (card) => {
        const allusers = JSON.parse(localStorage.getItem("users"));
        const filteredusers = allusers.filter((item) => item.cardnumber !== card)
        localStorage.setItem("users", JSON.stringify(filteredusers));
    }
    const withdraw = (card) => {
        navigate('/withdraw/' + card, { replace: true });
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('users')));
    }, []);
    const refbalance = useRef();
    const refhide = useRef();
    const refhideclose = useRef()
    const navigate = useNavigate()
    const [cardno, setCardno] = useState(0);
    const [toggle, setToggle] = useState(false);
    const check = (card) => {
        setCardno(card)
        setToggle(!toggle)
        // refbalance.current.style.display = "block";
        // refhide.current.style.display = "none"
        // refhideclose.current.style.display = "block"
    }
    const hidebalance = () => {
        alert("no")
    }
    const update = (card, pin) => {
        navigate('/confirm/oldpin/' + card + "/" + pin, { replace: true });
    }
    const addcard = () => {
        navigate('/', { replace: true })
    }
    return (
        <>
            <Nav></Nav>
            <div style={{ display: "flex", marginTop: "100px", gap: "30px", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {
                    user && user.map((user, index) => {
                        return (
                            <div key={index} className='atmcontainercol1'>
                                <div className='atmcontainer'>
                                    {/* <i><FaUserCircle></FaUserCircle></i> */}
                                    {/* <div className='btn'>
                                        <Button2 logout={() => logout(user.cardnumber)} name="delete" bgcolor="#d70026" border="1px solid #d70026"></Button2>
                                        <Button2 logout={() => withdraw(user.cardnumber)} name="withdraw" bgcolor="#145226" border="1px solid #145226"></Button2>
                                    </div> */}
                                </div>
                                {/* <div className="userdetail">
                                    <p className="phone">{user.name}</p>
                                    <p className="phone">{user.number}</p>
                                    <p className="bank">{user.bankcard}</p>
                                    <p className="type">{user.banktype}</p>
                                </div> */}

                                <div className='carddetail'>
                                    <div>

                                        <div className='bankname'>{user.bankname}</div>
                                        <div className='cardtype'>{user.cardtype}</div>
                                        <div className='cardno'>{user.cardnumber}</div>
                                        <div style={{ display: "flex" }} >
                                            <div className='expiry'>
                                                <span>VALID</span> <span>THRU</span>
                                            </div>
                                            <span >{user.expiry}</span>
                                        </div>








                                    </div>
                                </div>
                                {/* <div className='updatecont' style={{}}>
                                    <Button2 logout={() => check(user.cardnumber)} name={cardno == user.cardnumber && toggle ? user.amount : "balance"} width="200px" bgcolor="#166534" border="1px solid #166534"></Button2>
                                    <Button2 logout={() => update(user.cardnumber, user.pin)} name="update pin" width="200px" bgcolor="#78350F" border="1px solid lightblue"></Button2>
                                </div> */}
                            </div>
                        )
                    })
                }
                {/* <div style={{ width: "100%", display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <Button2 logout={addcard} bgcolor="#d70026" border="1px solid #d70026" width="50%" name="Add Card"></Button2>
                </div> */}

            </div>
        </>
    )

}

export default AtmCard