import { useState } from "react";
import Hamburger from "./Hamburger";
import Tag from "./Tag";

function Aside({ tags, posts, setPosts }) {
    // states
    const [showSideBar, setShowSideBar] = useState(false);

    // actions
    const handleAllClick = () => {
        setPosts(posts);
    };

    // classes
    const translateLeftClass = showSideBar
        ? "translate-x-0"
        : "translate-x-[-150px]";
    const visibilityClass = showSideBar ? "block" : "hidden";

    return (
        <aside
            className={`bg-stone-700 text-stone-300 top-[10vh] bottom-0 w-[150px] fixed transition-all md:static md:translate-x-0 ${translateLeftClass}`}
        >
            <Hamburger
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
            ></Hamburger>
            <ul className={`text-2xl mt-12 md:block ${visibilityClass}`}>
                {tags.map((tag, index) => (
                    <Tag
                        key={index}
                        tag={tag}
                        posts={posts}
                        setPosts={setPosts}
                    ></Tag>
                ))}
                <li
                    onClick={handleAllClick}
                    className="px-8 md:pl-4 md:pr-16 py-2 my-2 cursor-pointer hover:text-white hover:scale-110"
                >
                    All
                </li>
            </ul>
        </aside>
    );
}

export default Aside;
