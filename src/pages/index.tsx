import Image from 'next/image'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <Layout page_title='ADB Porfolio Home'>
      <div className='flex flex-col w-screen h-3/4  items-center'>

        <div className=' w-5/6 flex flex-col items-center  bg-amber-300 m-10 '>
          <Image src='/images/my_pic.png' className='rounded-full outline-offset-2 border-spacing-4 outline-dashed outline-violet-400 outline-dashed'

            width={200} height={200}

            alt='my profile picture' />

        </div>

        <p></p>
      </div>

    </Layout>
  )
}
