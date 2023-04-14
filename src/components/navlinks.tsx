import Link from "next/link"

interface ILinkProps {
    links: string[]
    style: string

}
const NavLinks = ({ links, style }: ILinkProps) => {
    return (
        <div className='flex-row justify-end md:flex hidden'

        >
            {
                links.map((val) => {
                    return (
                        <Link key={val} href={`/${val.toLowerCase()}`} className={style}>{val}</Link>
                    )
                })
            }

        </div>
    )
}


export default NavLinks