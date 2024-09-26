import React, { useState } from "react";
import styles from './index.module.css'
import { MdOutlineAtm } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ListItem from "../../components/ListItem";
import { FaBars } from "react-icons/fa";

const Nav = () => {
    const navigate = useNavigate();
    const withdraw = () => {
        navigate('/withdraw')
    }
    const resetpin = () => {
        navigate('/resetpin')
    }
    const Mobileupdate = () => {
        navigate('#')
    }
    const addcard = () => {
        navigate('/card')
    }
    const Viewprofile = () => {
        navigate("/profile")
    }
    const CheckBalance = () => {
        navigate('/balance')
    }
    const [width, setWidth] = useState(window.innerWidth);
    const getwidth = () => {
        setWidth(window.innerWidth);
    }
    addEventListener("resize", getwidth);
    // const [click, setClick] = useState(false);
    const [classname, setclassname] = useState(styles.displaynone);
    const toggle = () => {
        setclassname(styles.displayBlock);
    }
    const displayNone = () => {
        setclassname(styles.displaynone)
    }
    return (
        <>
            <div className={classname}>
                <div style={{ width: "100%", display: "flex", justifyContent: "end" }} onClick={displayNone} >
                    <span className={styles.remove}>X</span>
                </div>
                <ul className={styles.ul}>
                    <ListItem onclick={withdraw} name="withdraw"></ListItem>
                    <ListItem onclick={resetpin} name="resetpin"></ListItem>
                    <ListItem onclick={addcard} name="addcard"></ListItem>
                    <ListItem onclick={Viewprofile} name="profile"></ListItem>
                    <ListItem onclick={CheckBalance} name="balance"></ListItem>
                </ul>
            </div>
            <div className={styles.navcont}>
                <div className={styles.logo}>
                    <MdOutlineAtm size="50px" />
                </div>
                {
                    width > 650 ? <ul>
                        <ListItem onclick={withdraw} name="withdraw"></ListItem>
                        <ListItem onclick={resetpin} name="resetpin"></ListItem>
                        <ListItem onclick={addcard} name="addcard"></ListItem>
                        <ListItem onclick={Viewprofile} name="profile"></ListItem>
                        <ListItem onclick={CheckBalance} name="balance"></ListItem>
                    </ul> :
                        <li onClick={toggle} className={styles.toggle}><FaBars color="#fff" size="30px" /></li>
                }

            </div>
        </>
    );
};
export default Nav;
