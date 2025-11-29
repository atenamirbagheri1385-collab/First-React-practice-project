import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import {Route , Routes} from "react-router-dom";
import AboutUs from './pages/aboutUs/AboutUs';
import ArticlePage from './pages/articlePage/articlePage';
import CreateArticle from './pages/creatArticle/CreateArticle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/articlePage/:id' element={<ArticlePage />} />
      <Route path='/CreateArticle' element={<CreateArticle />} />
    </Routes>    

    </>
  )
}



export default App
