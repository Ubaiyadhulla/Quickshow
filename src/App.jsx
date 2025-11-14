import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import Navbar from  "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Favorite from "./pages/Favorite.jsx"
import Details from "./pages/Details.jsx"
import Movies from "./pages/Movies.jsx"
import SeatSellection from "./pages/SeatSellection.jsx"
import MyBooking from "./pages/MyBooking.jsx"
import Footer from "./components/Footer.jsx"


const App = () => {

  const isAdminPath  = useLocation().pathname.startsWith("/admin")
  return (
    <div>
      {!isAdminPath &&<Navbar/>}

      {/*------------ Routes---------- */}
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/movies' element={<Movies/>}/>
         <Route path='/movies/:id' element={<Details/>}/>
         <Route path='/movies/:id/:date' element={<SeatSellection/>}/>
         <Route path='/my-booking' element={<MyBooking/>}/>
         <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
     {!isAdminPath && <Footer/>}
    </div>
  )
}

export default App