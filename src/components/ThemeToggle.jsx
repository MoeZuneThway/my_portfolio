import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme');
    if(storedTheme=='dark'){
setIsDarkMode(true);
            document.documentElement.classList.add('dark');
    }else{
      setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
    }
    },[])
    const toggleTheme =()=>{
        if(isDarkMode){
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');  
        }
        else{
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
        }
    }
  return (
    <button onClick={toggleTheme} className={`fixed max-sm:hidden top-5  right-5 z-50  rounded-full transition-colors duration-300`}>{isDarkMode? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900'/>}</button>
  )
}

export default ThemeToggle
