import Image from 'next/image'
import Layout from '@/components/layout'
import SocialButton from '@/components/socialButton'

export default function Home() {
  return (
    <Layout page_title='ADB Porfolio : Home'>
      <div className='flex flex-col w-screen h-5/6  items-center'>

        <div className=' w-5/6 h-full flex flex-col items-center justify-center rounded-lg shadow-2xl outline-2  outline outline-violet-400 mt-10'>
          <Image src='/images/my_pic.png' className='rounded-full outline-offset-2 mb-10 border-spacing-4 outline-dashed outline-violet-400 outline-dashed'

            width={200} height={200}

            alt='my profile picture' />
          <div className='text-center w-72 flex flex-col justify-around '>

            <div className=' flex flex-row justify-evenly mb-10
          '>

              <SocialButton icon_type='twitter' social_link='https://twitter.com/bivasDas93' />
              <SocialButton icon_type='facebook' social_link='https://www.facebook.com/profile.php?id=100086548803077' />
              <SocialButton icon_type='linkedin' social_link='https://www.linkedin.com/in/anindra-das-bivas-4aa0b523a/' />
              <SocialButton icon_type='github' social_link='https://github.com/Anindra123' />
            </div>

            <div >

              <p className=' text-lg font-bold mb-2 text-violet-400'>Hello 👋, I am Anindra Das Bivas</p>

              <p className=' text-md text-justify mb-4 text-violet-400'>I am currently a student studying computer science and Engineering
                at American International University Bangladesh  <a href="https://www.aiub.edu" className=' text-violet-300 hover:text-violet-600 focus:text-violet-700 active:text-violet-800' target="_blank" rel="noopener noreferrer">(AIUB)</a>.
                I am passionate about web development and AI in the field of Computer vision and Natural Language processing (NLP).</p>

              <p className=' text-lg text-violet-400 font-bold mb-2'> Please Checkout my 👇 : </p>

            </div>


          </div>
        </div>

        <p></p>
      </div>

    </Layout>
  )
}
