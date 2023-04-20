
interface ILinkButtonProp {
    link: string;
    button_name: string;
}

const LinkButton = ({ link, button_name }: ILinkButtonProp) => {

    return (

        <a href={link} target="_blank" rel="noopener noreferrer"
            className="px-8 py-2 bg-violet-400 text-indigo-100 rounded-3xl hover:bg-violet-500 shadow-zinc-800 shadow-md  inline-block"
        >{button_name}</a>
    )

}


export default LinkButton