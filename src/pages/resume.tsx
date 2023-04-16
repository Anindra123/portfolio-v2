import { FunctionComponent } from "react";
import Link from 'next/link'
import Layout from "@/components/layout";


const Resume: FunctionComponent = () => {

    return (

        <Layout page_title="ADB Porfolio : Resume">


            <div className='flex flex-col items-center justify-center bg-slate-800 text-center '>
                <p className='text-3xl'> I might have a degree 🧑‍🎓</p>

                <Link className='w-1/5 m-2 h-max pb-2 pt-2 hover:bg-slate-500 rounded-lg text-2xl bg-slate-600 ' href='/'>Back To Home 🏠</Link>
            </div>

        </Layout>

    )

}

export default Resume 