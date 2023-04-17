import Image from 'next/image'
import Layout from '@/components/layout'
import SocialButton from '@/components/socialButton'

export default function Home() {
  return (
    <Layout page_title='ADB Porfolio : Home'>
      <div className='flex flex-col w-screen h-3/4  items-center'>

        <div className=' w-5/6 h-3/4 flex flex-col items-center justify-evenly  bg-amber-300 m-10 '>
          <Image src='/images/my_pic.png' className='rounded-full outline-offset-2 border-spacing-4 outline-dashed outline-violet-400 outline-dashed'

            width={200} height={200}

            alt='my profile picture' />
          <div className=' bg-amber-700 w-4/6 flex flex-row justify-evenly
          '>

            <SocialButton icon_type='twitter' social_link='https://twitter.com/bivasDas93' />
            <SocialButton icon_type='facebook' social_link='https://www.facebook.com/profile.php?id=100086548803077' />
            <SocialButton icon_type='linkedin' social_link='https://www.linkedin.com/in/anindra-das-bivas-4aa0b523a/' />
          </div>

        </div>

        <p></p>
      </div>

    </Layout>
  )
}
