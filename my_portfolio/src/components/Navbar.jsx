import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Navbar() {
    let Links = [

        { name: 'Skills', links: '/' },
        { name: 'Experience', links: '/' },
        { name: 'Projects', links: '/' },
        { name: 'Education', links: '/' },

    ]


    let [isOpen, setOpen] = useState(false)
    return (
        <div className="shadow-md w-full sticky top-0 left-0  z-50  ">
            <div className="md:px-12 py-4 px-7 pr-7 md:flex justify-between items-center bg-slate-950 text-white shadow-md " >

                {/* logo here */}
                <div className='flex md:text-3xl cursor-pointer items-center gap-2 text-1xl '>
                    {/* <BeakerIcon className='w-7 h-7 text-blue-600'/> */}
                    <span className='font-bold  text-blue-500'><>&#60;</><span className=' text-white'>pooja</span>/<span className='text-white'>goyal</span><>&#62;</></span>
                </div>

                {/* mobile icons */}
                <div
                    onClick={() => setOpen(!isOpen)}
                    className='md:hidden  w-7 h-7 absolute right-8 top-6 cursor-pointer'>
                    {
                        isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>


                {/*nav links here */}
                <ul className={`md:flex  md:pl-0 gap-4 text-center  md:static md:bg-slate-950 
                transition-all bg-slate-950 duration-500 ease-in justify-center  absolute w-full md:w-auto
                ${isOpen?'top-[3.6rem]  m-auto left-0':'top-[-490px]  left-0'}
                `}>
                    {Links.map(link => (
                        <li key ={link} className='my-7 md:my-0 md:ml-8 '>
                            <a  href='/'> {link.name} </a>
                        </li>))}
                </ul>

                <button className='btn bg-slate-800 p-1.5 ring-offset-2 border-2 hover:bg-slate-900 ring-white rounded-lg hidden  md:block' ><a href='https://github.com/pooja-369'>Github Profile</a></button>
            </div>

        </div>
    )
}

export default Navbar