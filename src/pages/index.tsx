import Image from 'next/image'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <Layout page_title='ADB Porfolio Home'>


      <div className=' flex flex-col w-screen bg-amber-300 h-screen items-center p-4'>
        <Image src='/images/my_pic.jpg' width={200} height={200}

          alt='my profile picture' />

      </div>
    </Layout>
  )
}
