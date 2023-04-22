import { MutableRefObject, RefObject, forwardRef } from "react"

type propType = {
    isClicked: boolean
    handleClick: () => void
}

const MobileNavScreen = ({ isClicked, handleClick }: propType) => {
    return (

        <div style={{ transform: isClicked ? 'translateX(55%)' : 'translateX(100%)' }} className=" flex flex-col p-5  bg-lime-400 w-screen h-screen fixed  transition-all ease-linear opacity-50  md:hidden" >
            <button className="w-10 h-10 bg-amber-700 text-violet-500 flex flex-col text-3xl  after:content-['\d7']" onClick={handleClick}>
            </button>
        </div >
    )

};


export default MobileNavScreen