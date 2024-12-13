import Card from "./Card";
import { foods } from "../data/foods";
import posts from "../data/posts";

function Main({ titolo }) {
    return (
        <main className="min-h-[85vh] p-5 bg-stone-300">
            <h1 className="text-center text-4xl font-semibold mb-3">
                {titolo}
            </h1>
            <div className="w-3/4 xl:w-3/5 mx-auto grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <Card
                        key={post.id}
                        image={post.image}
                        title={post.title}
                        content={post.content}
                    ></Card>
                ))}
            </div>
        </main>
    );
}

export default Main;
