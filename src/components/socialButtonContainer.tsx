import SocialButton from "./socialButton"


const SocialButtonContainer = () => {

    return (

        <div className=' flex flex-row justify-evenly mb-10
          '>

            <SocialButton icon_type='twitter' social_link='https://twitter.com/bivasDas93' />
            <SocialButton icon_type='facebook' social_link='https://www.facebook.com/profile.php?id=100086548803077' />
            <SocialButton icon_type='linkedin' social_link='https://www.linkedin.com/in/anindra-das-bivas-4aa0b523a/' />
            <SocialButton icon_type='github' social_link='https://github.com/Anindra123' />
        </div>

    )
}


export default SocialButtonContainer