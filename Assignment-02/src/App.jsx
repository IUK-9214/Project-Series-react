
import  {BrowserRouter, Routes,Route} from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'


function App() {
  

  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>

   </BrowserRouter>
   </>
  )
}

export default App
