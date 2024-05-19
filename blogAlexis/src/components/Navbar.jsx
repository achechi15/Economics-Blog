import { useState } from 'react';
import { menu, close, logo, en, es } from '../assets';


export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    
    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='xxs:ml-4 sm:ml-10 ss:ml-10 md:ml-3 opacity-[80%] w-full h-[25px]' />
                </div>

                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='bg-transparent border-none'>
                        <img src={es} alt="spanish" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[100%] w-[32px] h-[32px]'/>
                    </button>

                    <button className='bg-transparent border-none'>
                    <img src={en} alt="spanish" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[100%] w-[32px] h-[32px]'/>
                    </button>

                
                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle ? menu : close} alt='menu' className='w-[28px] h-[28px] object-contain mr-10' />
                </div>
            </div>
            <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                    <li>Home</li>
                    <li>About</li>
                    <div className='flex flex-col'>
                        <button className='bg-transparent border-none'>
                            <img src={es} alt="spanish" className='xxs:ml-4 sm:ml-5 ss:ml-5 md:ml-3 opacity-[100%] w-[32px] h-[32px]'/>
                        </button>

                        <button className='bg-transparent border-none py-3'>
                            <img src={en} alt="spanish" className='xxs:ml-4 sm:ml-5 ss:ml-5 md:ml-3 opacity-[100%] w-[32px] h-[32px] '/>  
                        </button>
                    </div>
                </ul>
        </div>
    )
}
