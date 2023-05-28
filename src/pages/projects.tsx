import { FunctionComponent } from "react";
import Link from "next/link";
import Layout from "@/components/layout";


const Project: FunctionComponent = () => {

    return (

        <Layout page_title="ADB Porfolio : Projects">


            <div className='flex flex-col items-center justify-center text-center '>
                <p className="text-2xl">Projects</p>
            </div>

        </Layout>

    )

}

export default Project