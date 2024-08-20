import { Routes, Route } from 'react-router-dom'
import Characters from './pages/Characters/Characters'
import NotFound from './pages/NotFound/NotFound'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Personaje from './pages/Personaje/Personaje'



function App() {

  return (
    <>
    <Header></Header>
  <Routes>
  <Route path='/' element={<Characters/>} ></Route>
  <Route path='/character/:id' element={<Personaje/>} ></Route>
  </Routes>
  <Footer></Footer>
    </>
  )
}

export default App
