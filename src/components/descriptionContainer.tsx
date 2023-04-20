import LinkButton from "./linkButton"


const DescriptionContainer = () => {
    return (
        <div >
            <p className=' text-lg font-bold mb-2 text-violet-300'>Hello 👋, I am Anindra Das Bivas</p>

            <p className=' text-md text-justify mb-10 text-violet-300'>I am currently a student studying computer science and Engineering
                at American International University Bangladesh  <a href="https://www.aiub.edu" className=' text-violet-300 hover:text-violet-600 focus:text-violet-700 active:text-violet-800' target="_blank" rel="noopener noreferrer">(AIUB)</a>.
                I am passionate about web development and AI in the field of Computer vision and Natural Language processing (NLP).</p>
            <div className="  flex flex-row justify-evenly ">
                <LinkButton button_name="My CV" link="#" />
                <LinkButton button_name="Contact Me" link="/contact" />
            </div>


        </div>

    )
}

export default DescriptionContainer