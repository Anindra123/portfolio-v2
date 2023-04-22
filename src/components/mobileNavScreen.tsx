import { MutableRefObject, RefObject, forwardRef } from "react"

type Props = {}
const MobileNavScreen = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (

        <div ref={ref} className=" bg-lime-400 w-screen h-screen fixed translate-x-full transition-all ease-linear opacity-50  md:hidden">

        </div>
    )

});


export default MobileNavScreen