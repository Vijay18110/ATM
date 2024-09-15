import { useEffect, useState } from 'react'
import './App.css'
import AtmCard from './components/ATM/AtmCard'
import FillCarddetails from './components/fillCarddetails'

import FrontPage from './components/FrontPage'
import Update from './components/Update/Update'
import NewPin from './components/Newpin/Newpin'
import Done from './components/Done/Done'
import Withdraw from './components/Withdraw/Withdraw'

function App() {
  const [val, setval] = useState("");
  const [jsondata, setjsondata] = useState([]);
  const fncontinue = () => {
    setval("fill")
  }

  const logout = () => {
    setval("")
  }
  const update = () => {
    setval("update")
  }

  const close = () => {
    setval("card")
  }
  const next = () => {
    setval("newpin")
  }
  const done = () => {
    setval("Done")
  }
  const withdraw = () => {
    setval("withdraw")
  }
  const withdrawdone = () => {
    setval("withdrawdone")
  }

  const showcard = () => {

    setval("card");


  }
  return (
    <>
      {val === "" && <FrontPage fncontinue={fncontinue}></FrontPage>}
      {val === "fill" && <FillCarddetails showcard={showcard} logout={logout} fncontinue={fncontinue} showcard={showcard} ></FillCarddetails>}
      {val === "card" && <AtmCard update={update} logout={logout} withdraw={withdraw}  ></AtmCard>}
      {val === "update" && <Update next={next} close={close} ></Update>}
      {val === "newpin" && <NewPin close={logout} logout={done}  ></NewPin>}
      {val === "Done" && <Done val="done" logout={logout} ></Done>}
      {val === "withdraw" && <Withdraw fncontinue={withdrawdone} ></Withdraw>}
      {val === "withdrawdone" && <Done logout={logout} val="Thank You For Transaction :)" ></Done>}
    </>
  )
}
export default App

{/*
<AtmCard></AtmCard> */}
