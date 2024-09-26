import { useEffect, useState } from 'react'
import './App.css'
import FillCarddetails from './pages/Fillcarddetails/FillCarddetails'
import FrontPage from './pages/frontpage/FrontPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AtmCard from './pages/GeneratedAtm/AtmCard'
import Enterpin from './components/Enterpin'
import NewPin from './components/Newpin/Newpin'
import Done from './components/Done/Done'
import Update from './components/Update/Update'
import Withdraw from './components/Withdraw/Withdraw'
import ResetNumber from './components/resetNumber'
import Profile from './pages/Profile'
import Balance from './components/Balance'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<AtmCard ></AtmCard>} />
          <Route path='/card' element={<FrontPage></FrontPage>} />
          <Route path='/pin/:card' element={<Enterpin></Enterpin>} />
          <Route path='/profile' element={<Profile></Profile>} />
          <Route path='/balance' element={<Balance></Balance>} />
          <Route path='/withdraw' element={<Withdraw></Withdraw>} />
          <Route path='/done' element={<Done val="pin updated"></Done>} />
          <Route path='/confirm/oldpin/:card/:pin' element={<Update val="pin updated"></Update>} />
          <Route path='/wrongpin/:card' element={<Done logo="error.png" val="remaining 3"></Done>} />
          <Route path='/withrawdone' element={<Done logo="success.png" val="Your amount has been debited :)"></Done>} />
          <Route path='/pingenerated' element={<Done logo="success.png" val="Your Pin Has Been Generated :)"></Done>} />
          <Route path='/update/pin/:card/:pin' element={<NewPin></NewPin>} />
          <Route path='/resetpin' element={<ResetNumber></ResetNumber>} />
          <Route path='/fill/details/:card' element={<FillCarddetails></FillCarddetails>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App

{/*
<AtmCard></AtmCard> */}
