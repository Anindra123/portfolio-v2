
interface ILinkButtonProp {
    link: string;
    button_name: string;
    style: string;
}

const LinkButton = ({ link, button_name, style }: ILinkButtonProp) => {

    return (

        <a href={link} target="_blank" rel="noopener noreferrer"
            className={style}
        >{button_name}</a>
    )

}


export default LinkButton