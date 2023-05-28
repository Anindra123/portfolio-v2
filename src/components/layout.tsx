import Head from 'next/head'

import Link from 'next/link'
import { FunctionComponent, ReactNode, ReactPropTypes } from 'react'
import NavBar from './navbar'
import MobileNavScreen from './mobileNavScreen'
import { Exo_2 } from 'next/font/google'

const exo_2 = Exo_2({
    subsets: ['latin'],
    display: 'swap'
})

interface IChildrenProp {
    children: ReactNode,
    page_title: string
}

const style = `bg-zinc-600 w-screen h-screen ${exo_2.className}`
export default function Layout({ children, page_title }: IChildrenProp) {

    return (

        <div className={style}  >
            <Head>
                <title>{page_title}</title>
            </Head>
            <NavBar />

            {children}
        </div >
    )
}