import { IconType } from "react-icons"
import { FaTwitter, FaFacebook, FaLinkedinIn, FaGithub, } from "react-icons/fa"


interface socialProps {
    icon_type: string,
    social_link: string | undefined,
    style: string
}

const SocialButton = ({ icon_type, social_link, style }: socialProps) => {
    let iconMap = new Map<string, JSX.Element>();

    iconMap.set('facebook', <FaFacebook className="  group-hover:text-zinc-600" />)
    iconMap.set('twitter', <FaTwitter className=" group-hover:text-zinc-600" />)
    iconMap.set('linkedin', <FaLinkedinIn className=" group-hover:text-zinc-600" />)
    iconMap.set('github', <FaGithub className=" group-hover:text-zinc-600" />)

    return (
        <a target="_blank" href={social_link} className={style}>
            {iconMap.get(icon_type)}

        </a>
    )

}


export default SocialButton