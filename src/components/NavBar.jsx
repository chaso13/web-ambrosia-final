import {useState} from 'react'

import {close,logo, menu} from '../assets';
import {navLinks} from '../constants';
const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  return (
  
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-950 dark:border-gray-950'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 pl-10 pr-10'>
      <img src={logo} alt='webambrosia' className='w-[32px] h-[32px]'/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) =>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white hover:text-orange-400`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}

      </ul>


      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img src={toggle ? close : menu} alt ='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[95vw] rounded-xl sidebar`}>
          <ul className = 'list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, index) =>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[19px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
          </ul>
        </div>
      </div>
      </div>

    </nav>
    
  )
}

export default Navbar