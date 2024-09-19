import { useEffect, useState } from 'react'
import './App.css'
import FillCarddetails from './pages/Fillcarddetails/FillCarddetails'
import FrontPage from './pages/frontpage/FrontPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AtmCard from './pages/GeneratedAtm/AtmCard'
import Enterpin from './components/Enterpin'
import NewPin from './components/Newpin/Newpin'
import Done from './components/Done/Done'
import Withdraw from './components/Withdraw/Withdraw'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage></FrontPage>} />
          <Route path='/pin/:card' element={<Enterpin></Enterpin>} />
          <Route path='/withdraw/:card' element={<Withdraw></Withdraw>} />
          <Route path='/done' element={<Done val="pin updated"></Done>} />

          <Route path='/update/pin/:card/:pin' element={<NewPin></NewPin>} />


          <Route path='/atm/:card/:pin' element={<AtmCard ></AtmCard>} />
          <Route path='/fill/details/:card' element={<FillCarddetails></FillCarddetails>} />
        </Routes>
      </BrowserRouter>

      {/* {val === "fill" && <FillCarddetails showcard={showcard} logout={logout} fncontinue={fncontinue} showcard={showcard} ></FillCarddetails>}
      {val === "card" && <AtmCard update={update} logout={logout} withdraw={withdraw}  ></AtmCard>}
      {val === "update" && <Update next={next} close={close} ></Update>}
      {val === "newpin" && <NewPin close={logout} logout={done}  ></NewPin>}
      {val === "Done" && <Done val="done" logout={logout} ></Done>}
      {val === "withdraw" && <Withdraw fncontinue={withdrawdone} ></Withdraw>}
      {val === "withdrawdone" && <Done logout={logout} val="Thank You For Transaction :)" ></Done>} */}
    </>
  )
}
export default App

{/*
<AtmCard></AtmCard> */}
