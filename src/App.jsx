import React, { useState } from 'react'
import Intro from './components/intro/Intro'
import Portofolio from './components/portofolio/Portofolio'
import Topbar from './components/topbar/Topbar'
import Works from './components/works/Works'

import "./app.scss"
import Menu from './components/menu/Menu'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Portofolio/>
      </div>
    </div>
  )
}
