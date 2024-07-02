import Image from "../assets/fdbdd.jpg"

function Projects() {
    return (
        <>
            <div className='py-10'>
                <div className='flex justify-center md:text-5xl text-3xl font-bold md:leading-15'>Projects</div>
                <div className='flex justify-center text-lg py-5 z-20 text-center px-5'>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects</div>
            </div>

            <div className="flex  flex-wrap gap-4 w-full place-content-center  text-slate-900  z-20 relative">
           <div className=' h-72 relative max-w-xs overflow-hidden rounded-2xl shadow-lg '>
                <img src={Image} alt='photo'
                    className=' h-72 transition-transform group-hover:scale-110 duration-200'
                />
                <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white'>
                    <div className='p-4'> My education has been a journey of self-discovery and growth. My educational details are as follows.
                    <div className='flex gap-4  py-4 '>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Code</a></button>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button>
                </div>
                    </div>
               
                   
                    
                    </div>
            </div>


            <div className='  h-72 relative max-w-xs overflow-hidden rounded-2xl shadow-lg '>
                <img src={Image} alt='photo'
                    className=' h-72 transition-transform group-hover:scale-110 duration-200'
                />
                <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white'>
                    <div className='p-4'> My education has been a journey of self-discovery and growth. My educational details are as follows.
                    <div className='flex gap-4 py-4'>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Code</a></button>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button>
                </div>
                    </div>
               
                   
                    
                    </div>
            </div>


            <div className='relative max-w-xs   h-72 overflow-hidden rounded-2xl shadow-lg '>
                <img src={Image} alt='photo'
                    className='  h-72 transition-transform group-hover:scale-110 duration-200'
                />
                <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white'>
                    <div className='p-4'> My education has been a journey of self-discovery and growth. My educational details are as follows.
                    <div className='flex gap-4 py-4'>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg' ><a href='https://github.com/pooja-369'>Code</a></button>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button>
                </div>
                    </div>
               
                   
                    
                    </div>
            </div>



            <div className='relative max-w-xs h-72 overflow-hidden rounded-2xl shadow-lg '>
                <img src={Image} alt='photo'
                    className=' h-72 transition-transform group-hover:scale-110 duration-200  '
                />
                <div className='absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white'>
                    <div className='p-4'> My education has been a journey of self-discovery and growth. My educational details are as follows.
                    <div className='flex gap-4  py-4'>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Code</a></button>
                    <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg ' ><a href='https://github.com/pooja-369'>Demo</a></button>
                </div>
                    </div>
               
                   
                    
                    </div>
            </div>



            
           </div>
        </>
    )
}

export default Projects