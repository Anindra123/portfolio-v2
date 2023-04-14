import Head from 'next/head'

import Link from 'next/link'
import { FunctionComponent, ReactNode, ReactPropTypes } from 'react'
import NavBar from './navbar'

interface IChildrenProp {
    children: ReactNode,
    page_title: string
}

export default function Layout({ children, page_title }: IChildrenProp) {

    return (

        <div className=' bg-zinc-600 w-screen h-screen'>
            <Head>
                <title>{page_title}</title>
            </Head>
            <NavBar />

            {children}
        </div>
    )
}