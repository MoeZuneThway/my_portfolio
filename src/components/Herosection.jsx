import React from 'react'
import { Link } from 'react-router-dom'

const Herosection = () => {
  return (
    <section id='hero' className='flex flex-col items-center justify-center min-h-screen relative'>
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className='text-4xl md:text-6xl font-bold tracking-tight transition-all duration-300'>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                    <span className='opacity-0 text-primary animate-fade-in-delay-1'>MZ </span>
                    <span className='opacity-0 text-gradient animate-fade-in-delay-2 ml-2'> THWAY</span>
                </h1>
                <p className='text-lg mx-auto md:text-xl text-muted-primary opacity-0 animate-fade-in-delay-3 max-2xl:'>
                    I am an enthusiastic Computer Science <span className='font-bold'> First-Class </span>graduate with strong full-stack development experience across React, Vue.js, Node.js, Express.js, and MongoDB. 
                </p>
                <div>
                    <Link to='/projects' className='cosmic-button opacity-0 animate-fade-in-delay-4' >View My Work </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Herosection
