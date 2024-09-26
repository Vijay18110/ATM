import React, { useEffect, useState } from "react";
import styles from './index.module.css'
import Button2 from "../../widgets/Button2";
import { useNavigate, useSearchParams } from "react-router-dom";
// import { FaUserCircle } from ''
const Profile = () => {
    const navigate = useNavigate();
    const close = () => {
        navigate('/atmcards');
    }
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('users')))
    }, []);
    return <div>
        <div className={styles.Profilecont}>
            {/* <i><FaUserCircle></FaUserCircle></i> */}
            <div className="userdetail">
                <p className="phone">{users[0].name}</p>
                <p className="phone">{users[0].number}</p>
            </div>
        </div>
        <div style={{ textAlign: "center" }}>
            <Button2 logout={close} name="close" bgcolor="red" border="red" width="50%"></Button2>
        </div>
    </div>;
};

export default Profile;
