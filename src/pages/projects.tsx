import { FunctionComponent } from "react";
import Link from "next/link";


const Project: FunctionComponent = () => {

    return (

        <div className='flex flex-col items-center justify-center bg-slate-800 text-center w-screen h-screen'>
            <p className='text-3xl'> Awesome projects page 💻</p>

            <Link className='w-1/5 m-2 h-max pb-2 pt-2 hover:bg-slate-500 rounded-lg text-2xl bg-slate-600 ' href='/'>Back To Home 🏠</Link>
        </div>

    )

}

export default Project