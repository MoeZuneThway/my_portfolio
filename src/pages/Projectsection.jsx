import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import Starbackground from '../components/Starbackground';
import Navbar from '../components/Navbar';
import { ExternalLink, Github } from 'lucide-react';
const Projectsection = () => {
    const projects = [
        {
            id : 1,
            title : "SSJT",
            description : "A beautiful content management website for asthetic machines distributor",
            image : '/projects/innopex.png',
            tags : ['PHP','WordPress','Bootstrap'],
            demoUrl: "https://www.innopexmyanmar.com/",
            githubUrl: "#",
        },
        {
            id : 2,
            title : "Asia Saint",
            description : "A beautiful wordpress website for a language school.",
            image : '/projects/asia saint.png',
            tags : ['PHP','WordPress','Bootstrap'],
            demoUrl: "http://asgglobal.com.mm/",
            githubUrl: "#",
        },
        {
            id : 3,
            title : "Carrier King",
            description : "A simple website for a logistic company.",
            image : '/projects/carrier king.png',
            tags : ['PHP','WordPress','Bootstrap'],
            demoUrl: "http://carrierkinglogistics.com.mm/",
            githubUrl: "#",
        },
        {
            id : 4,
            title : "Dong Peng",
            description : "A beautiful website for Dong Peng, a plastic mould and machine trading company.",
            image : '/projects/dong peng.png',
            tags : ['PHP','WordPress','Bootstrap'],
            demoUrl: "http://dongpengplasticmm.com/",
            githubUrl: "#",
        },
        {
            id : 5,
            title : "Senoda",
            description : "A beautiful website for garment distributor.",
            image : '/projects/senoda.png',
            tags : ['PHP','WordPress','Bootstrap'],
            demoUrl: "http://senodagarment.com/about-us",
            githubUrl: "#",
        },
         {
            id : 6,
            title : "Movieflix",
            description : "A beautiful movie website with Imdb api.",
            image : '/projects/movieflix.png',
            tags : ['React','Tailwind'],
            demoUrl: "http://senodagarment.com/about-us",
            githubUrl: "#",
        },
    ];
  return (
    <>
    {/* Theme toggle */}
      <ThemeToggle/>
      {/* Star background */}
      <Starbackground/>
      {/* nav */}
      <Navbar/>


       <section className='py-24 px-4 relative' >
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured
                     <span className='text-primary'> Projects</span> </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are projects of varying scale developed during my university studies, my experience as a junior developer, and through personal practice. Each project was thoughtfully crafted with close attention to detail to effectively meet its intended goals and requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key)=>(
                        <div key={key} className='group bg-card rounded-lg shadow-xl border border-primary/20 overflow-hidden card-hover h-100 relative'>
                            <div className="overflow-hidden h-34 ">
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-100' />
                            </div>
                            <div className='p-6'>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span className='px-2 py-1 text-xs font-medium rounded-full bg-transparent border '>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className='text-lg font-semibold mb-1'>{project.title}</h3>
                            <p className='text-muted-foreground text-sm mb-4 p-2'>{project.description}</p>
                            <div className="flex justify-between items-center bottom-2 absolute p-2">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><ExternalLink size={20}/></a>
                                    <a href={project.githubUrl} className='text-foreground/80 hover:text-primary transition-colors duration-300' target='_blank'><Github size={20}/></a>
                                </div>           
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
   
  )
}

export default Projectsection
