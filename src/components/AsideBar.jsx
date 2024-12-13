function AsideBar({ tags }) {
    return (
        <aside className="bg-stone-600 text-white w-0 md:w-auto relative">
            <div className="cursor-pointer text-4xl absolute top-0 right-[-50px] md:hidden">
                <i className="fa-solid fa-bars text-stone-600"></i>
            </div>
            <ul className="text-2xl hidden  md:flex flex-col gap-3 p-5">
                {tags.map((tag, index) => (
                    <li key={index}
                    className="pr-32">{tag}</li>
                ))}
            </ul>
        </aside>
    );
}

export default AsideBar;
