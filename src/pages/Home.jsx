import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import Starbackground from '../components/Starbackground'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Aboutsection from '../components/Aboutsection'
import Skillssection from './Skillssection'
import Projectsection from './Projectsection'
import Contactsection from '../components/contactsection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      
      {/* Theme toggle */}
      <ThemeToggle/>
      {/* Star background */}
      <Starbackground/>
      {/* nav */}
      <Navbar/>
      {/* Hero section */}
      <Herosection/>
      {/* about section */}
      <Aboutsection/>
      {/* Contact section */}
      <Contactsection />
    </div>
  )
}

export default Home
