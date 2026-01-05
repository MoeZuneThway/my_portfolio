import React, { useEffect, useState } from 'react'

const Starbackground = () => {
    // id, size, x, y, opacity
    const [star, setStar] = useState([]);
    const [meteors, setMeteors] = useState([]);
   useEffect(()=>{
      generateStars();
      generateMeteors();

      const handleResize=()=>{
        generateStars();
      }
      window.addEventListener('resize',handleResize);
      return ()=> window.removeEventListener('resize',handleResize)
   },[])


    const generateStars =()=>{
        const numberOfStars = Math.floor( (window.innerWidth* window.innerHeight)/10000);
        const newStars = [];

        for(let i=0; i< numberOfStars; i++){
            newStars.push({
                id :i,
                size : Math.random()*3 +1,
                x : Math.random() *100,
                y: Math.random() * 100,
                opacity: Math.random()* 0.5 +0.5,
                animationDuration : Math.random()* 4 +2,
            })
        }
        setStar(newStars);
    }

    const generateMeteors =()=>{
        const numberOfMeteors = 6;
        const newMeteors = [];

        for(let i=0; i< numberOfMeteors; i++){
            newMeteors.push({
                id :i,
                size : Math.random()*3 +1,
                x : Math.random() *100,
                y: Math.random() * 100,
                delay: Math.random()* 0.5 +0.5,
                animationDuration : Math.random()* 4 +2,
            })
        }
        setMeteors(newMeteors);
    }
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {star.map((s)=>(
          <div key={s.id} className='star animate-pulse-subtle' style={{
            width : s.size + 'px',
            height: s.size + 'px',
            left : s.x + '%',
            top : s.y + '%',
            opacity : s.opacity ,
            animationDuration : s.animationDuration + 's'
          }}>

          </div>
        ))}

{meteors.map((meteor)=>(
          <div key={meteor.id} className='meteor animate-meteor' style={{
            width : meteor.size*8 + 'px',
            height: meteor.size + 'px',
            left : meteor.x + '%',
            top : meteor.y + '%',
            animation_delay : meteor.delay ,
            animationDuration : meteor.animationDuration + 's'
          }}>

          </div>
        ))}
    </div>
  )
}

export default Starbackground
