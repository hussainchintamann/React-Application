import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './components/navbar'
import Roompage from './pages/Roompage'
import Servicepage from './pages/Servicepage'
import Sliderpage from './pages/Sliderpage'
import Teampage from './pages/Teampage'
// import Login from './component/Login'
// import Register from './component/Register'
// import Protectedroutes from './assets/services/Protectedroutes'
import "bootstrap/dist/css/bootstrap.min.css"
// import BookNow from './Home/BookNow'
import Newsletterpage from './pages/Newsletterpage'
// import Footer from './component/Footer'
import './home/style.css'
function App() {
  
 

  return (
    <>
    <Navbar/>
     <Routes>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Route path='/register' element={<Register/>}/> */}
      {/* <Route path='/' element={<Protectedroutes/>}> */}
     <Route path='/' element ={<Home/>}/>
     <Route path='Rooms' element ={<Roompage/>}/>
     {/* <Route path='Room/:RoomId' element={<RoomDetail  handleClick={handleClick}/>} /> */}
     {/* <Route path='Room/:bookId'element={<BookNow/>} /> */}
     <Route path='Service' element ={<Servicepage/>}/>
     <Route path='Slider' element ={<Sliderpage/>}/>
     <Route path='Team' element ={<Teampage/>}/>
     <Route path='Contact' element ={<Newsletterpage/>}/>
     {/* </Route> */}
     </Routes>

     {/* <Footer/> */}
    </>
  )
}

export default App