

const NavButton = () => {
    return (
        <div className="flex flex-row  justify-end
 md:hidden  ">

            <button className="mr-5 w-9 h-8 flex flex-col items-center justify-center bg-zinc-600 outline-2 rounded-md outline  outline-violet-400 ">
                <div className="h-0 w-5 border-2 border-solid border-violet-400 mb-1"></div>
                <div className="h-0 w-5 border-2 border-solid border-violet-400 mb-1"></div>
                <div className="h-0 w-5 border-2 border-solid border-violet-400"></div>

            </button>
        </div>
    )

}

export default NavButton