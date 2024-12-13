function AsideBar({ tags, setPosts }) {

    const handleTagClick = () => {
        console.log("click");
    }
    return (
        <aside className="bg-stone-600 text-white w-0 md:w-auto relative">
            <div className="cursor-pointer text-4xl absolute top-0 right-[-50px] md:hidden">
                <i className="fa-solid fa-bars text-stone-600"></i>
            </div>
            <ul className="text-2xl hidden md:block ">
                {tags.map((tag, index) => (
                    <li
                        onClick={handleTagClick}
                        key={index}
                        className="px-12 py-2 my-2 cursor-pointer text-stone-300 hover:text-white hover:scale-110"
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default AsideBar;
