import SocialButton from "./socialButton"

interface IPropType {
    style: string;
}

const socialLinks = new Map<string, string>()
socialLinks.set("twitter", "https://twitter.com/bivasDas93")
socialLinks.set("facebook", "https://www.facebook.com/profile.php?id=100086548803077")
socialLinks.set("linkedin", "https://www.linkedin.com/in/anindra-das-bivas-4aa0b523a/")
socialLinks.set("github", "https://github.com/Anindra123")

const socials: string[] = ["twitter", "facebook", "linkedin", "github"]

const SocialButtonContainer = ({ style }: IPropType) => {

    return (

        <div className={style}>
            {

                socials.map((val) => (
                    <SocialButton key={val} icon_type={val} social_link={socialLinks.get(val)}
                        style="w-8 h-8 rounded-full text-violet-300 flex
                         items-center justify-center bg-zinc-600 outline-2 
                         outline outline-violet-300 hover:bg-violet-300 md:mr-2 
                         hover:outline-zinc-600 transition-transform ease-linear no_highlights
                         hover:scale-150 group" />
                ))
            }


        </div>

    )
}


export default SocialButtonContainer