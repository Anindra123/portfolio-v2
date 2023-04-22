import { forwardRef } from "react"


const MobileNavScreen = forwardRef((props, ref) => {
    return (

        <div ref={ref} className=" bg-lime-400 w-screen h-screen fixed translate-x-full transition-all ease-in-out opacity-50  md:hidden">

        </div>
    )

});


export default MobileNavScreen