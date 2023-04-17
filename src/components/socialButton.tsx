import { IconType } from "react-icons"
import { FaTwitter, FaFacebook, FaLinkedinIn, } from "react-icons/fa"


interface socialProps {
    icon_type: string,
    social_link: string
}

const SocialButton = ({ icon_type, social_link }: socialProps) => {
    let logo = <FaTwitter className=" text-violet-400" />
    if (icon_type == 'facebook') {


    }

    return (
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-600 outline-2 outline outline-violet-400">
        </div>
    )

}


export default SocialButton