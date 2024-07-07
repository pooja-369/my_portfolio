import myImage from '../assets/fdbdd.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'
function AboutMe() {
  return (
    <section id="AboutUs">
<div className='md:py-10 '>
    <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>About Us </div>
      <div className='flex justify-center text-lg py-5 z-20 text-center px-5'>My education has been a journey of self-discovery and growth. My educational details are as follows.</div>
    </div>
<div className=' w-4/5 m-auto flex gap-5 items-center md:px-10 py-3 md:py-10 px-7 pr-7  flex-col lg:flex-row lg:justify-between'>
{/* left section */}
  <div className='lg:w-1/3 lg:py-10  order-1 relative'> 
{/* <div> */}
    {/* <img src={myImage} alt="about_me"/> */}
    <img
        src={myImage}
        alt="Image 1"
        className="absolute top-[-85px] left-0 w-64 h-64"
      />
      <img
        src={myImage}
        alt="Image 2"
        className="absolute top-[-25px] left-16 w-64 h-64"
      />
      {/* </div> */}
  </div>

{/* right section */}
  <div className=' lg:w-1/2 order-2 md:pb-0 pb-10 '>

<div className='flex  items-center gap-3 lg:justify-start justify-center'>
<div className='border-2 rounded-lg p-5 py-7 '>
<FaAward className='m-auto'/>
<h5 className='flex justify-center'>Experience</h5>
<small>3+ Year Working </small>
</div>

<div className='border-2 rounded-lg p-5 py-7 '>
<FiUsers className='m-auto'/>
<h5 className='flex justify-center'>Clients</h5>
<small>200+ WorldWide</small>
</div>

<div className='border-2 rounded-lg p-5 py-7 '>
<VscFolderLibrary className='m-auto'/>
<h5 className='flex justify-center'>Projects</h5>
<small>80+ Completed </small>
</div>

</div>


<div className='py-4'>
<p>My education has been a journey of self-discovery and growth. My educational details are as follows.My education has been a journey of self-discovery and growth. My educational details are as follows.</p>


</div>

<div className='flex lg:justify-start justify-center '>
<button className=' btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://drive.google.com/file/d/16MM5oVQQGqWHCTmSM4Sj3PO5NwDU91Ek/view'>Let's Talk</a></button>
</div>


  </div>
</div>
    </section>
  )
}

export default AboutMe