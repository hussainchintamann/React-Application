import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Roompage from './pages/Roompage'
import Servicepage from './pages/Servicepage'
import Sliderpage from './pages/Sliderpage'
import Teampage from './pages/Teampage'
import "bootstrap/dist/css/bootstrap.min.css"
import Newsletterpage from './pages/Newsletterpage'
import './home/style.css'
import NavigationBar from './components/navbar'
import CheckOut from './pages/CheckOut'
import Footer from './components/Footer'
function App() {
  
 

  return (
    <>
    <NavigationBar/>
     <Routes>
     <Route path='/' element ={<Home/>}/>
     <Route path='Rooms' element ={<Roompage/>}/>
     <Route path='Service' element ={<Servicepage/>}/>
     <Route path='Slider' element ={<Sliderpage/>}/>
     <Route path='Team' element ={<Teampage/>}/>
     <Route path='Contact' element ={<Newsletterpage/>}/>
     <Route  path='CheckOut' element={<CheckOut/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App