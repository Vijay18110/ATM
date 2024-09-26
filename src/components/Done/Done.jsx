import React, { useState } from 'react'
import '../Update/Update.css'
import Button2 from '../../widgets/Button2'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


const Done = (props) => {
    const [counter, setCounter] = useState(3);
    const { pathname } = useLocation();
    const navigate = useNavigate()
    const params = useParams();

    const logout = () => {
        if (pathname === '/wrongpin/' + params.card) {
            navigate('/pin/' + params.card, { state: counter });
        }
        else {
            navigate('/');
        }

    }
    return (
        <div className='containerchangepin'>
            <img style={{ width: "100px", marginBottom: "10px" }} src={props.logo} alt="" />
            <div className="heading"> {props.val}</div>
            <Button2 logout={logout} width="100px" name="CLOSE" bgcolor="#a3213d"></Button2>
        </div>
    )
}

export default Done