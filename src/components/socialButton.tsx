import { IconType } from "react-icons"
import { FaTwitter, FaFacebook, FaLinkedinIn, } from "react-icons/fa"


interface socialProps {
    icon_type: string,
    social_link: string
}

const SocialButton = ({ icon_type, social_link }: socialProps) => {
    let iconMap = new Map<string, JSX.Element>();

    iconMap.set('facebook', <FaFacebook className=" text-violet-400" />)
    iconMap.set('twitter', <FaTwitter className="text-violet-400" />)
    iconMap.set('linkedin', <FaLinkedinIn className="text-violet-400" />)

    return (
        <a target="_blank" href={social_link} className=" w-8 h-8 rounded-full flex items-center justify-center bg-zinc-600 outline-2 outline outline-violet-400 hover:scale-125  hover:bg-violet-400 hover:text-zinc-600 transition ease-in-out">
            {iconMap.get(icon_type)}

        </a>
    )

}


export default SocialButton