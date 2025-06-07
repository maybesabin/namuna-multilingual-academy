const Overlay = ({ dependency }: { dependency: boolean }) => {
    return (
        <div className={`z-40 bg-black fixed inset-0 ${dependency ? "opacity-30 visible" : "opacity-0 invisible"} transition-all duration-300 ease-in-out`}></div>
    )
}

export default Overlay