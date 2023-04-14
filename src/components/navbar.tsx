

import Link from 'next/link'
const NavBar = () => {
    return (


        <div className='flex flex-row w-screen items-center justify-between h-28 border-b-2  border-violet-400'>
            <p className=' text-2xl text-violet-400  ml-5  flex-1'>adb.</p>
            <nav className=' text-violet-400  flex-1'>
                <div className='flex-row justify-end md:flex hidden'

                >
                    <Link href='/skills' className='inline-block mr-5' >Skills</Link>
                    <Link href='/skills' className='inline-block mr-5' >Skills</Link>
                    <Link href='/skills' className='inline-block mr-5' >Skills</Link>
                    <Link href='/skills' className='inline-block mr-5' >Skills</Link>

                </div>

            </nav>


        </div>

    )
}