import { BrowserRouter, Router, Route } from 'react-router-dom' 

import Home from './pages/home/home'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Gallery from './pages/gallery/gallery'
import Plans from './pages/plans/plans'
import Trainers from './pages/trainers/trainers'
import NotFound from './pages/notFound/notFound'
import Navbar from './components/Navbar'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <Plans/>
      <Trainers/>
      <NotFound/>
    </BrowserRouter>
    
  )
}

export default App
