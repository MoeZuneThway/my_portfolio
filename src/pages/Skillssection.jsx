import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import Starbackground from '../components/Starbackground';
import Navbar from '../components/Navbar';

const Skillssection = () => {
    const logos = [
          {name : 'HTML', src:'/logos/html.png'},
          {name : 'CSS', src:'/logos/css-3.png'},
          {name : 'Bootstrap', src:'/logos/bootstrap.png'},
          {name : 'Javascript', src:'/logos/js.png'},
          {name : 'Typescript', src:'/logos/typescript.png'},
          {name : 'React', src:'/logos/react.png'},
          {name : 'Vue', src:'/logos/Vue.png'},
          {name : 'Nodejs', src:'/logos/nodejs.png'},
          {name : 'Nextjs', src:'/logos/next.jpg'},
          {name : 'Database', src:'/logos/database.png'},
          {name : 'Java', src:'/logos/java.png'},
          {name : 'Php', src:'/logos/php.png'},
          {name : 'Python', src:'/logos/python.png'},
          {name : 'Aws', src:'/logos/aws.png'},
          {name : 'Git', src:'/logos/github.png'},
          {name : 'Vs code', src:'/logos/vs code.png'},
{name : 'Vs code', src:'/logos/vs code.png'},
        ];
    const skills = [{name: 'Html/CSS', level : 95, category: 'frontend'},
        {name: 'Javascript', level : 90, category: 'fullstack'},
        {name: 'Typescript', level : 65, category: 'fullstack'},
        {name: 'Java', level : 70, category: 'fullstack'},
        {name: 'Python', level : 70, category: 'fullstack'},
        {name: 'React', level : 85, category: 'front'},
        {name: 'Vue.js', level : 85, category: 'frontend'},
        {name: 'Next.js', level : 60, category: 'frontend'},
        {name: 'Tailwind CSS', level : 80, category: 'frontend'},
        {name: 'Bootstrap', level : 95, category: 'frontend'},
        {name: 'PHP', level : 80, category: 'backend'},
        {name: 'Node.js', level : 80, category: 'backend'},
        {name: 'Express.js', level : 80, category: 'backend'},
        {name: 'Laravel', level : 70, category: 'backend'},
        {name: 'Mongodb', level : 80, category: 'backend'},
        {name: 'MySQL', level : 80, category: 'backend'},
        {name: 'AWS', level : 50, category: 'tools'},
        {name: 'Git/Github', level : 90, category: 'tools'},
        {name: 'Postman', level : 90, category: 'tools'},
        {name: 'VS Code', level : 90, category: 'tools'},
    ];
  return (
    
   <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
    {/* Theme toggle */}
      <ThemeToggle/>
      {/* Star background */}
      <Starbackground/>
      {/* nav */}
      <Navbar/>
        <section id='skills' className='py-24 px-4 relative'>
        
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl text-center font-bold mb-12'>
                Techinal <span className='text-primary'>Skills</span>
            </h2>
    <div className="relative w-full overflow-hidden">
      {/* Gradient fade edges (optional) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Track */}
      <div className="group flex w-max animate-carousel gap-6 hover:[animation-play-state:paused]">
        {/* Duplicate content for infinite loop */}
        
         {logos.map((logo,key)=>(
           <div key={key}
            className="shrink-0 w-[100px]  rounded-xl overflow-hidden  flex items-center justify-center py-5"
          >
            <img src={logo.src} alt="" className='w-14  object-cover animate-bounce'/>
          </div>
         ))}
      
      </div>
    </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  '>
                {skills.map((skill,key)=>(
                    <div className='p-6 rounded-lg shadow-xs card-hover bg-card' key={key}>
                        <div className='text-left mb-4 '>
                            <h3 className='font-semibold text-lg'>{skill.name}</h3>
                        </div>
                        <div className='w-full h-2 rounded-full overflow-hidden bg-gray-600'>
                            <div className='bg-linear-to-r from-primary via-primary to-secondary h-2 rounded-full origin-left animate-fromleft ' style={{width: skill.level + "%"}}/>
                        </div>
                        <div className='text-right'>
                            <span className='text-sm'>{skill.level} %</span>
                        </div>
                    </div>

                ))}
            </div>
        </div>
        </section>
   </div>
   
  
    
  )
}

export default Skillssection
