import { useState } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/color-logo.png'; 



import NavButton from "./NavButton";



export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <nav className="relative flex justify-between items-center bg-gradient-to-r from-black/100 via-black/30 to-black/10 px-10 py-5 z-50 text-white">
                <div className="flex items-center space-x-6">
                    <img className="w-13 h-12 md:w-19 md:h-15" src={logo} alt="Logo"  />
                    <div className="hidden md:flex items-center space-x-6">
                    <NavButton href="#heropage" title="Home"/>
                    <NavButton href="#section4" title="About"/>
                    <NavButton href="#section7" title="Contact"/>
                    </div>
                </div>

                <button className="hidden md:flex items-center gap-2 text-[22px]  absolute right-14 bg-gradient-to-r from-violet-600 to-purple-400 px-10 py-3 rounded-full text-white hover:bg-[#c5bbff] hover:from-transparent hover:to-transparent hover:text-[#1c1c1c] transition" >
                    Know More<ArrowCircleRightOutlinedIcon fontSize='large'/>
                </button>

               

                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? null: (<MoreHorizIcon fontSize="large" className='absolute right-6 top-6 text-white'/>)}
                </button>

        
            </nav>

            {menuOpen && (
                <div className=" inset-0 w-screen h-screen overflow-hidden bg-white bg-opacity-90 text-black z-30 transition-all duration-300 relative">
                    <button
                        className="absolute top-5 left-5 text-black"
                        onClick={() => setMenuOpen(false)}
                    >
                         <CloseIcon fontSize="large" />
                    </button>
                    <div className='w-full h-full flex flex-col items-center justify-center space-y-6 px-4 '>
                        <NavButton title="Home" />
                        <NavButton title="About" />
                        <NavButton title="Contact" />
                        <button 
                            className="mt-4 flex items-center gap-2 text-[18px] bg-gradient-to-r from-violet-600 to-purple-400 px-6 py-2 rounded-full hover:bg-[#c5bbff] hover:text-[#1c1c1c] transition"
                        >
                            Know More <ArrowCircleRightOutlinedIcon fontSize="medium" />
                        </button>
                    </div>
                </div>
            )}


        </>
    );
}