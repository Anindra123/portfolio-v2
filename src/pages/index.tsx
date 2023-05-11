import Image from 'next/image'
import Layout from '@/components/layout'
import SocialButtonContainer from '@/components/socialButtonContainer'
import DescriptionContainer from '@/components/descriptionContainer'
import MobileNavScreen from '@/components/mobileNavScreen'

export default function Home() {
  return (
    <Layout page_title='ADB Porfolio : Home'>
      <div className='flex flex-col w-screen md:justify-center h-5/6  items-center'>

        <div className='w-5/6 md:w-5/6 md:h-3/4 h-full lg:w-5/6 lg:h-3/4 flex flex-col md:flex-row md:justify-evenly md:justify-center 
         items-center  justify-center rounded-lg shadow-2xl shadow-black
          outline-2  outline outline-violet-300 mt-10'>
          <Image src='/images/my_pic.png' className='rounded-full 
          outline-offset-2 mb-10  border-spacing-4 md:mb-0 
           outline-violet-400 outline-dashed w-44 h-44 md:w-64 md:h-64 lg:w-80 lg:h-80'

            width={400} height={400}

            alt='my profile picture' />
          <div className='text-center w-72 lg:w-1/2 lg:text-justify  flex flex-col justify-around '>

            <SocialButtonContainer style='flex flex-row justify-evenly mb-10 lg:hidden' />

            <DescriptionContainer />

          </div>
        </div>


      </div>

    </Layout>
  )
}
