import Card from "./Card";
import { useRef } from "react";

function Main({ posts }) {
    // console.log("Rendering Main . . .");
    // Main ref
    const mainRef = useRef(null);
    // btn ref
    const btnRef = useRef(null);

    // actions
    const handleClick = () => {
        const btn = btnRef.current;
        console.log(btn);
        btn.classList.toggle("bg-red-500");
        if (btn.className.includes("bg-red-500")) {
            btn.innerText = "I'll turn blue without re-rendering!";
        } else {
            btn.innerText = "I'll turn red without re-rendering!";
        }
    };

    return (
        <main ref={mainRef} className="overflow-y-scroll p-5 bg-stone-300">
            <button
                onClick={handleClick}
                ref={btnRef}
                className="px-6 py-2 bg-cyan-700 text-white rounded-md border-2 focus:border-black transition-all"
            >
                I'll turn red without re-rendering!
            </button>
            <div className="w-3/4 xl:w-3/5 mx-auto grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        image={post.image}
                        title={post.title}
                        content={post.content}
                        tags={post.tags}
                        mainRef={mainRef}
                    ></Card>
                ))}
            </div>
        </main>
    );
}

export default Main;
