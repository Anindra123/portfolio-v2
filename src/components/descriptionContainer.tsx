import LinkButton from "./linkButton"
import SocialButtonContainer from "./socialButtonContainer"


const DescriptionContainer = () => {
    return (
        <div >
            <p className=' text-md font-bold mb-2 text-violet-300 md:text-lg lg:text-2xl'>Hello 👋, I am Anindra Das Bivas</p>

            <p className=' text-sm text-justify mb-5 text-violet-300 md:text-md lg:text-lg'>I am currently completing by bachelors degree in Computer Science and Engineering
                at American International University Bangladesh  <a href="https://www.aiub.edu" className=' text-violet-100 no_highlights hover:text-violet-600 focus:text-violet-700 active:text-violet-800' target="_blank" rel="noopener noreferrer">(AIUB)</a>.
                I am passionate about web development and AI in the domain of Computer vision and Natural Language processing (NLP).</p>

            <SocialButtonContainer style=" flex-row justify-start mb-5 hidden md:flex" />
            <div className="flex flex-row  justify-evenly md:justify-start">
                <LinkButton button_name="My CV" link="#" style="px-8 py-2 mr-5
                 bg-violet-400 text-indigo-100 rounded-3xl 
                 hover:bg-violet-500 shadow-zinc-800 shadow-md inline-block no_highlights" />
                <LinkButton button_name="Contact Me" link="/contact" style="px-8 py-2
                 bg-violet-400 text-indigo-100
                  rounded-3xl hover:bg-violet-500 shadow-zinc-800 shadow-md  inline-block no_highlights" />
            </div>


        </div>

    )
}

export default DescriptionContainer