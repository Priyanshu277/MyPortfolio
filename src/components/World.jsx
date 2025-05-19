import React, { useEffect, useState, useRef } from 'react';
import Car from './Car';
import ProjectCard from './ProjectCard';
import Cloud from './Cloud';
import cloud1 from '../assets/cloud1.png';
import SceneryObject from './SceneryObject';
import tree1 from '../assets/tree1.png';
import house2 from '../assets/house2.png';
import HeroSection from './HeroIntro';
import InstructionsPanel from './InstructionsPanel';
import WoodenSign from './WoodenSign';

const World = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [carX, setCarX] = useState(200);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [hasClosedIntroduction, setHasClosedIntroduction] = useState(false);
  const keysPressed = useRef({ left: false, right: false });
  const animationRef = useRef();
  const [direction, setDirection] = useState('right');
  const visibilityRange = 150;

  const sections = [
    { left: 1000, title: 'Skills', description: 'This Skill tree is representing what i have learned in my journey.' },
    { left: 2100, title: 'Projects', description: 'The next section is projects section, Explore my projects and what I have built near buildings.'  },
    { left: 3500, title: 'Leetcode Profile', description: 'If you like problem solving Have a Look on my leetcode profile.'  },
    { left: 4500, title: 'GitHub', description: 'View my GitHub repositories and contributions.' },
    { left: 5500, title: 'Resume', description: 'Download my resume and contact me.'  },
  ];


  useEffect(() => {
    if(!hasStarted) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') keysPressed.current.left = true;
      if (e.key === 'ArrowRight') keysPressed.current.right = true;
  
      // Start the animation loop only if it's not already running
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(moveCar);
      }
    }
  
    const handleKeyUp = (e) => {
      if (e.key === 'ArrowLeft') keysPressed.current.left = false;
      if (e.key === 'ArrowRight') keysPressed.current.right = false;
  
      // Stop the animation loop if no keys are pressed
      if (!keysPressed.current.left && !keysPressed.current.right) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  
    const moveCar = () => {
      setCarX((prevX) => {
        let newX = prevX;
        if (keysPressed.current.left){
          newX = Math.max(prevX - 8, 0);
          setDirection('left');
        }
        if (keysPressed.current.right){
          newX = Math.min(prevX + 8, 7000);
          setDirection('right');
        }
        return newX;
      });
  
      // Continue the animation loop if keys are still pressed
      if (keysPressed.current.left || keysPressed.current.right) {
        animationRef.current = requestAnimationFrame(moveCar);
      } else {
        animationRef.current = null;
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [hasStarted]);

  useEffect(() => {
  if (
    hasStarted &&
    carX > 350 && // Show after car passes 400px
    !showIntroduction &&
    !hasClosedIntroduction
  ) {
    setShowIntroduction(true);
  }
}, [carX, hasStarted, showIntroduction, hasClosedIntroduction]);

  const projectBuildings = [
    { left: 2600, title: 'IPL Predictor', link:'https://github.com/Priyanshu277/IPL_2025', buttn:'View Project ->', desc:'Ipl analysis and Predict the winner of IPL 2025 using ML' },
    { left: 3200, title: 'Stock Trading ', link:'https://github.com/Priyanshu277/Stock_Market_Prediction', buttn:'View Project ->', desc:'Stock Trading using AI algorithms' },
    { left: 4100, title: 'Leetcode Profile',link:'https://leetcode.com/u/PriyanshuJha/', buttn:'View Leetcode Profile ->', desc:'My Leetcode profile solved over 600+ questions' },
    { left: 5100, title: 'Github Profile', link:'https://github.com/Priyanshu277', buttn:'View Github Profile ->', desc:'My Github profile with all my projects' },
    { left: 6100, title: 'Resume', link:'/Resumecurr_priyanshu.pdf', buttn:'Download Resume ->', desc:'My resume with all my skills and experience' },
  ];

  

  return (
    <div className="relative w-screen overflow-hidden h-screen bg-green-100">
      <HeroSection hide={hasStarted} onStart={() => setHasStarted(true)}/>
      <InstructionsPanel visible={carX < 500}/>
      <div
        className="relative h-full"
        style={{
          width: '8500px',
          transform: `translateX(-${carX - 200}px)`,
          background: 'linear-gradient(to top, #87ceeb 60%, #cceeff 90%)',
        }}
      >

        <WoodenSign text="Skill Tree" left="1450px" />
        <div
  className="absolute"
  style={{
    left: '1200px', // adjust as needed for new size
    top: '120px',
    zIndex: 2,
    width: '800px',
    height: '700px',
  }}
>
  <svg width="800" height="700">
    {/* Trunk */}
    <rect x="380" y="400" width="40" height="200" fill="#8B5E3C" />
    {/* Branches */}
    <line x1="400" y1="400" x2="240" y2="240" stroke="#8B5E3C" strokeWidth="16" />
    <line x1="400" y1="400" x2="560" y2="240" stroke="#8B5E3C" strokeWidth="16" />
    <line x1="400" y1="440" x2="200" y2="360" stroke="#8B5E3C" strokeWidth="12" />
    <line x1="400" y1="440" x2="600" y2="360" stroke="#8B5E3C" strokeWidth="12" />
    {/* Skills as leaves */}
    <circle cx="240" cy="240" r="56" fill="#34d399" />
    <text x="240" y="250" textAnchor="middle" fill="#fff" fontSize="28">React</text>
    <circle cx="560" cy="240" r="56" fill="#60a5fa" />
    <text x="560" y="250" textAnchor="middle" fill="#fff" fontSize="28">Python</text>
    <circle cx="200" cy="360" r="44" fill="#fbbf24" />
    <text x="200" y="370" textAnchor="middle" fill="#fff" fontSize="24">C++</text>
    <circle cx="600" cy="360" r="44" fill="#f472b6" />
    <text x="600" y="370" textAnchor="middle" fill="#fff" fontSize="24">ML</text>
    {/* Add more as needed */}
  </svg>
</div>
        
        <Cloud src={cloud1} top="70px" delay={0}  />
        <Cloud src={cloud1} top="90px" delay={4} />
        <Cloud src={cloud1} top="110px" delay={8} />
        <Cloud src={cloud1} top="65px" delay={12} />
        <Cloud src={cloud1} top="85px" delay={16} />
        <Cloud src={cloud1} top="95px" delay={20} />
      
        {/* Trees */}
        <SceneryObject src={tree1} left="150px" height='150px'/>
        <SceneryObject src={tree1} left="600px" height='150px'/>
        <SceneryObject src={tree1} left="1000px" height='150px' />
        <SceneryObject src={tree1} left="2100px" height='150px' />
        <SceneryObject src={tree1} left="3600px" height='150px' />
        <SceneryObject src={tree1} left="4550px" height='150px' />
        <SceneryObject src={tree1} left="5550px" height='150px' />

        {/* Background Pop-Ups */}
        {sections.map((section, idx) => {
          const isVisible = Math.abs(carX - section.left) < visibilityRange;

          return (
            <React.Fragment key={idx}>
              {isVisible && (
                <div
          className="absolute flex items-center gap-4 text-white bg-opacity-80 px-8 py-6 rounded-lg shadow-lg backdrop-blur-md"
          style={{
            left: `${section.left - 100}px`,
            top: '200px',
            width: '370px',
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        >
          {/* Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-yellow-400 flex-shrink-0 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
            <p className="text-base text-gray-100 mb-1">{section.description}</p>
            <span className="text-yellow-300 font-semibold text-lg mt-2">
              {section.title} section will begin!
            </span>
          </div>
        </div>
      )}
      </React.Fragment>
          );
        })}

        {/* Introduction Modal */}
{showIntroduction && (
  <div
    className="absolute text-center text-white bg-opacity-90 px-8 py-6 rounded-lg shadow-lg backdrop-blur-md"
    style={{
      left: '400px', // Position near the building
      top: '100px', // Adjust height to fit within the game world
      width: '350px',
      background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
      zIndex: 2, // Ensure it appears above other elements
    }}
  >
    <h2 className="text-3xl font-bold text-gray-100">Hi, I'm Priyanshu Jha</h2>
    <p className="mt-4 text-lg text-gray-300">
      Welcome to my interactive portfolio! I am a passionate developer with a love for creating innovative solutions. Explore my journey, projects, and achievements as you navigate through this portfolio.
    </p>
    <p className="mt-2 text-gray-400">
      Feel free to reach out to me for collaborations or opportunities!
    </p>
    <button
      className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      onClick={() => {
        setShowIntroduction(false); // Close the modal
        setHasClosedIntroduction(true);
      }}
    >
      Close
    </button>
  </div>
)}

       {/* Buildings */}
        <WoodenSign text="Project1" left="2510px" />
        <SceneryObject src={house2} left="2600px" width="160px" glow={true}/>
        <WoodenSign text="Project2" left="3110px" />
        <SceneryObject src={house2} left="3200px" width="160px" glow={true}/>
        <WoodenSign text="LeetCode" left="4000px" />
        <SceneryObject src={house2} left="4090px" width="160px" glow={true}/>
        <WoodenSign text="GitHub" left="5000px" />
        <SceneryObject src={house2} left="5090px" width="160px" glow={true}/>
        <WoodenSign text="Resume" left="6000px" />
        <SceneryObject src={house2} left="6090px" width="160px" glow={true}/>

        <Car left={carX} direction={direction} />
      
        
        <div className="absolute bottom-24 w-full h-6 bg-green-600 z-0" />
        <div className="absolute bottom-0 w-full h-24 bg-gray-800 z-0">
        <div className="h-2 w-full bg-yellow-300 mt-11 mx-auto" />


        </div>
       
        {projectBuildings.map((proj, idx) => {
        const isVisible = Math.abs(carX - proj.left) < visibilityRange;
        return (
          <ProjectCard
            key={idx}
            visible={isVisible}
            left={`${proj.left}px`}
            title={proj.title}
            link={proj.link}
            buttn={proj.buttn}
            desc={proj.desc}
          />
        );
      })}

      </div>
    </div>
  );
};

export default World;
