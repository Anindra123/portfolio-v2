import { useRef, useState } from 'react'
import MobileNavScreen from './mobileNavScreen'
import NavButton from './navbutton'
import NavLinks from './navlinks'

import Link from 'next/link'

const linkList: string[] = ['Skills', 'Resume', 'Contact', 'Projects']

const NavBar = () => {
    const [click, isClicked] = useState(false)

    function handleClick() {

        isClicked(!click)

    }




    return (

        <>
            <MobileNavScreen isClicked={click} handleClick={handleClick} />

            <div className='flex flex-row w-screen items-center justify-between h-28 border-b-2  border-violet-300'>
                <p className=' text-2xl text-violet-300  ml-5  flex-1'>adb.</p>
                <nav className=' text-violet-300  flex-1'>
                    <NavLinks links={linkList} style='inline-block mr-5' />
                    <NavButton handleClick={handleClick} />
                </nav>
            </div>

        </>

    )
}

export default NavBar