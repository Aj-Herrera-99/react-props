import { memo } from "react";

function Tag({ tag, posts, setPosts }) {
    // TODO: lavorare con gli id dei posts
    const handleTagClick = (e) => {
        const tagTarget = e.target.innerText.toLowerCase();
        const filteredPosts = posts.filter((post) =>
            post.tags.includes(tagTarget)
        );
        setPosts(filteredPosts);
    };
    console.log("Rendering Tag . . .")
    return (
        <li
            onClick={handleTagClick}
            className="px-8 md:pl-4 md:pr-16 py-2 my-2 cursor-pointer hover:text-white capitalize rounded-r-2xl hover:bg-stone-400"
        >
            {tag}
        </li>
    );
}

export default memo(Tag);
