import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <div className=' bg-gray-800 w-screen h-screen'>
      <div className='flex flex-row w-screen items-center h-10 border-b-2  border-violet-400'>
        <p className='flex-1 text-2xl text-violet-400'>adb.</p>
        <nav className='flex-1 text-violet-400 '>
          <Link href='/skills' >Skills</Link>
          <Link href='/skills' >Skills</Link>
          <Link href='/skills' >Skills</Link>
          <Link href='/skills' >Skills</Link>
        </nav>

        <div>
          <Image src='./public/my_pic.jgp' width={50} height={50}

            alt='my profile picture' />

        </div>

      </div>
    </div>
  )
}
