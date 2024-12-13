import { useState } from "react";

function AsideBar({ tags, posts, setPosts }) {
    // states
    const [showSideBar, setShowSideBar] = useState(false);

    // actions
    const handleTagClick = (e) => {
        const tagTarget = e.target.innerText.toLowerCase();
        const filteredPosts = posts.filter((post) =>
            post.tags.includes(tagTarget)
        );
        setPosts(filteredPosts);
    };

    const handleAllClick = () => {
        setPosts(posts);
    };

    const handleHamClick = (e) => {
        setShowSideBar(!showSideBar);
    };

    return (
        <aside
            className={`bg-stone-600 text-white h-full w-[150px] translate-x-[-150px] absolute transition-all md:static md:translate-x-0  ${
                showSideBar && "translate-x-0"
            }`}
        >
            <div
                onClick={handleHamClick}
                className={`cursor-pointer text-4xl absolute top-0 right-2 pt-3 md:hidden `}
            >
                <i
                    className={`fa-solid fa-bars text-stone-600 delay-500 translate-x-[50px] ${
                        showSideBar ? "hidden" : "block"
                    }`}
                ></i>
                <i
                    class={`fa-solid fa-xmark text-stone-300`}
                ></i>
            </div>
            <ul
                className={`text-2xl mt-12 md:block md:px-12 ${
                    showSideBar ? "block" : "hidden"
                }`}
            >
                {tags.map((tag, index) => (
                    <li
                        onClick={handleTagClick}
                        key={index}
                        className="px-8 py-2 my-2 cursor-pointer text-stone-300 hover:text-white hover:scale-110 capitalize"
                    >
                        {tag}
                    </li>
                ))}
                <li
                    onClick={handleAllClick}
                    className="px-8 py-2 my-2 cursor-pointer text-stone-300 hover:text-white hover:scale-110"
                >
                    All
                </li>
            </ul>
        </aside>
    );
}

export default AsideBar;
