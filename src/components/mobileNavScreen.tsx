import { MutableRefObject, RefObject, forwardRef } from "react"
import NavLinks from "./navlinks";

type propType = {
    isClicked: boolean
    handleClick: () => void
}

const MobileNavScreen = ({ isClicked, handleClick }: propType) => {
    return (

        <div style={{ transform: isClicked ? 'translateX(35%)' : 'translateX(150%)' }} className=" flex flex-col p-5  bg-zinc-600 w-screen h-screen fixed  transition-all ease-linear shadow-md shadow-zinc-700   md:hidden" >
            <button className="w-10 h-10 bg-zinc-600 text-violet-300
             border-solid border-2 border-violet-300 flex flex-col items-center 
             no_highlights text-2xl 
             after:content-['\d7']" onClick={handleClick}>
            </button>
            <NavLinks style="inline-block mb-10 text-2xl 
            hover:text-3xl transition-all ease-in-out no_highlights text-violet-300" parentStyle="flex flex-col
             justify-center p-10 h-3/4" />

        </div >
    )

};


export default MobileNavScreen