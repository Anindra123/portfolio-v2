import Link from 'next/link'


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-slate-800 text-center w-screen h-screen'>
      <p className='text-3xl'>My Super Awesome portfolio website 🚀</p>

      <p className='text-2xl'>Hi 👋, potential employer</p>
      <p className='text-1xl'>Checkout these awesome pages below 👇 </p>
      <Link className='w-1/5 m-2 h-max pb-2 pt-2 hover:bg-slate-500 rounded-lg text-2xl bg-slate-600 ' href='/skills'>Skills 🧬</Link>
      <Link className='w-1/5 m-2 h-max pb-2 pt-2 hover:bg-slate-500 rounded-lg text-2xl bg-slate-600 ' href='/projects'>Projects 💻</Link>
      <Link className='w-1/5 m-2 h-max pb-2 pt-2 hover:bg-slate-500 rounded-lg text-2xl bg-slate-600 ' href='/education'>Education 👨‍🎓</Link>
      <Link className='w-1/5 m-2 h-max pb-2 pt-2 hover:bg-slate-500 rounded-lg text-2xl bg-slate-600 ' href='/contact'>️

        Contact ☎
      </Link>
    </div>
  )
}
