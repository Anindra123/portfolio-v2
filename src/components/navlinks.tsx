import Link from "next/link"

interface ILinkProps {
    links: string[]

}
const NavLinks = ({ links }: ILinkProps) => {
    return (


        <div className='flex-row justify-end md:flex hidden'

        >
            {
                links.map((val) => {
                    return (
                        <Link key={val} href='/${val.toLower()}'>{val}</Link>
                    )
                })
            }

        </div>
    )
}