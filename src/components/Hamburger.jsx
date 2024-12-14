function Hamburger({ showSideBar, setShowSideBar }) {
    const handleHamClick = () => {
        setShowSideBar(!showSideBar);
    };
    return (
        <div
            onClick={handleHamClick}
            className={`cursor-pointer text-4xl absolute top-0 right-2 pt-3 md:hidden `}
        >
            <i
                className={`fa-solid fa-bars text-stone-600 delay-500 translate-x-[80px] ${
                    showSideBar ? "hidden" : ""
                }`}
            ></i>
            <i className={`fa-solid fa-xmark text-stone-300`}></i>
        </div>
    );
}

export default Hamburger;
