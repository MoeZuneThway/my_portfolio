import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { href, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems =[
    {name: "Home", href:"#hero"},
    {name: 'About', href:"#about"},
    {name:'Skills', href:"#skills"},
    {name: 'Projects',href:"#projects"},
    {name: "Contact", href:"contact"}
];
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    useEffect(()=>{
        const handleScroll =()=>{
            setScrolled(window.scrollY >10);
            console.log(scrolled)
        };
        window.addEventListener('scroll',handleScroll);
        return ()=> window.removeEventListener('scroll',handleScroll)
    },[])
  
    useEffect(() => {
        // Toggle the 'overflow-hidden' class on the body
        if (isMenuOpened) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // or '' to revert to default
        }})
  return (
    
    <nav  className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 shadow-lg py-5 backdrop-blur-md" : "py-5"
      }`}>
        <div className="container flex items-center justify-between">
          <Link to="/" className='flex items-center text-xl font-bold text-primary'>
            <span  className='relative z-10'>
                <span className='text-glow text-foreground'>MZT</span>
                Portfolio
            </span>
          </Link>
          {/* desktop nav */}
          <div className='hidden md:flex space-x-8'>
            {/* {navItems.map((item,key)=>(
              <a key={key} href={item.href}>
                  {item.name}
              </a>
            ))} */}

            <Link to='/'>
            Home
            </Link>
            
            <Link to='/skills'>
            Skills
            </Link>
            <Link to='/projects'>
            Projects
            </Link>
            
          </div>
          {/* mobie nav */}
          <button className='md:hidden z-[100]' onClick={() => setIsMenuOpened(!isMenuOpened)}>{isMenuOpened?<X size={24}/> :<Menu size={24}/>}</button>


          <div className={`fixed inset-0 items-center justify-center bg-background/95 backdrop-blur-md z-50 flex flex-col trasition-all duration-300 md:hidden ${isMenuOpened? 'opacity-100 overflow-hidden pointer-events-auto': 'opacity-0 pointer-events-none'}`}>
            <div className='flex flex-col space-y-8 text-xl'>
            {/* {navItems.map((item,key)=>(
              <a key={key} href={item.href} onClick={()=>{setIsMenuOpened(false)}}>
                  {item.name}
              </a>
            ))} */}
<Link to='/'>
            Home
            </Link>
            
            <Link to='/skills'>
            Skills
            </Link>
            <Link to='/projects'>
            Projects
            </Link>
          </div>
          </div>


        </div>
    </nav>
  )
}

export default Navbar
