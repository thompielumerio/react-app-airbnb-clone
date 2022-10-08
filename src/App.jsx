import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Items from './Components/Items'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div className="main">
      <Navbar />
      <Hero />
      <Items/>
      </div>
    </div>
  )
}

export default App
