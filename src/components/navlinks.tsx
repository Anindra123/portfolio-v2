import Link from "next/link"

interface ILinkProps {
    style: string,
    parentStyle: string
}

const linkList: string[] = ['Skills', 'Resume', 'Contact', 'Projects']
const NavLinks = ({ style, parentStyle }: ILinkProps) => {
    return (
        <div className={parentStyle}

        >
            {
                linkList.map((val) => {
                    return (
                        <Link key={val} href={`/${val.toLowerCase()}`} className={style}>{val}</Link>
                    )
                })
            }

        </div>
    )
}


export default NavLinks