import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Example = () => {

 
  return (
    <>
    {/* <div className="bg-gradient-to-br from-slate-900 to-violet-900 px-4 py-12" > */}
     <div>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Skills</div>
      <div className='flex justify-center text-lg py-5 px-5 text-center'>Here are some of my skills on which I have been working on for the past 3 years</div>
    </div>
    <div className="flex  flex-wrap gap-4 w-full place-content-center  text-slate-900  z-20 relative">
      <TiltCard className="flex z-30 bg-green" />
      <TiltCard />
      <TiltCard />
    </div>
    {/* </div> */}
    </>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


  const list =[
    {name:'C++',  source:'../assets/Skills Images/C++_logo.png'},
    {name:'CSS' ,source: '../assets/Skills Images/CSS-Logo.png'},
    {name:'Express' ,source: '../assets/Skills Images/expressjs_logo.webp'},
    {name:'Figma' ,source: '../assets/Skills Images/figma-logo.png'},
    {name:'Github' ,source: '../assets/Skills Images/github.png'},
    {name:'html5' ,source: '../assets/Skills Images/html5.png'},
    {name:'js', soruce:'../assets/Skills Images/js.webp'},
    {name:'material Ui', source:'../assets/Skills Images/material-ui.png'},
    {name:'node-js' , source :'../assets/Skills Images/Node.js_logo_2015.svg.png'},
    {name:'reactjs' , source:'../assets/Skills Images/React.webp'},
    {name:'tailwindcss', source:'../assets/Skills Images/tailwind-css.png'},

  ]

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-64 md:w-96 rounded-xl bg-gradient-to-br from-indigo-300 to-indigo-900"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute m-auto inset-4 grid  place-content-center rounded-xl bg-white shadow-lg"
      >
      <div className="items-center flex m-auto justify-center"> 
      <div className="text-3xl font-bold  md:mt-6">frontend</div>
</div>
        <p
          style={{
            transform: "translateZ(50px)",
            display:"flex",
            flexWrap:'wrap'
          }}
          className="text-center text-2xl font-bold"
        >
         
          <div className="flex justify-center gap-3 flex-wrap mb-3 mt-5">
         

          {list.map(link => (
            <div key={link.name} className="text-sm font-weight-400 rounded-lg border-2 border-black px-1 py-2 md:flex gap-2 justify-center items-center">
          <img src={link.source} alt="photo"   className='rounded-full  min-h-10 z-10 shadow-xl shadow-blue-800'/>
          {link.name}
          </div>
                        
                        ))}


          <div className="text-sm font-weight-400 rounded-lg border-2 border-black px-1 py-2 md:flex gap-2 justify-center items-center">
          <img src="#" alt="photo"/>
          React Js
          </div>

          <div className="text-sm font-weight-400 rounded-lg border-2 border-black px-1 py-2 md:flex gap-2 justify-center items-center">
          <img src="#" alt="photo"/>
          React Js
          </div>

          <div className="text-sm  rounded-lg border-2 border-black px-1 py-2 md:flex gap-2 justify-center items-center">
          <img src="#" alt="photo"/>
          React Js
          </div>

          <div className="text-sm font-weight-400 rounded-lg border-2 border-black px-1 py-2 md:flex gap-2 justify-center items-center">
          <img src="#" alt="photo"/>
          React Js
          </div>

          </div>
        </p>
      </div>
    </motion.div>
  );
};

export default Example;