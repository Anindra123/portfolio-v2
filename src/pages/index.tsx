import Image from 'next/image'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <Layout page_title='ADB Porfolio Home'>
      <div className='flex flex-col w-screen h-3/4 bg-indigo-500 items-center'>

        <div className=' w-5/6 flex flex-col items-center  bg-amber-300   p-4'>
          <Image src='/images/my_pic.jpg' className=' rounded-full'

            width={20} height={20}

            alt='my profile picture' />

        </div>
      </div>

    </Layout>
  )
}
