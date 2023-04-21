import Image from 'next/image'
import Layout from '@/components/layout'
import SocialButtonContainer from '@/components/socialButtonContainer'
import DescriptionContainer from '@/components/descriptionContainer'
import MobileNavScreen from '@/components/mobileNavScreen'

export default function Home() {
  return (
    <Layout page_title='ADB Porfolio : Home'>
      <div className='flex flex-col w-screen h-5/6  items-center'>

        <MobileNavScreen />
        <div className=' w-5/6 h-full flex flex-col items-center justify-center rounded-lg shadow-2xl shadow-black outline-2  outline outline-violet-300 mt-10'>
          <Image src='/images/my_pic.png' className='rounded-full outline-offset-2 mb-10 border-spacing-4 outline-dashed outline-violet-400 outline-dashed'

            width={200} height={200}

            alt='my profile picture' />
          <div className='text-center w-72 flex flex-col justify-around '>

            <SocialButtonContainer />

            <DescriptionContainer />

          </div>
        </div>


      </div>

    </Layout>
  )
}
