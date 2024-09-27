import React, { useEffect, useState } from "react";
import styles from './index.module.css'
import Button2 from "../../widgets/Button2";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { FaUserCircle } from ''
const Profile = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('users')))
    }, []);

    const navigate = useNavigate();
    const close = () => {
        navigate('/');
    }
    return <div>
        <div className={styles.Profilecont}>
            {/* <i><FaUserCircle></FaUserCircle></i> */}
            <div className="userdetail">
                {
                    users.length ? <>
                        <p className="phone">name: {users[0].name}</p>
                        <p className="phone">mobile: {users[0].number}</p>
                        <p style={{ color: "white" }} className="phone">totalcards: {users.length}</p>
                    </> : ""
                }
            </div>
        </div>
        <div style={{ textAlign: "center" }}>
            <Button2 logout={close} name="close" bgcolor="#d70026" border="#d70026" width="50%"></Button2>
        </div>
    </div>;
};

export default Profile;
