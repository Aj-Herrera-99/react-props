import Card from "./Card";

function Main({posts}) {
    return (
        <main className="min-h-[85vh] p-5 bg-stone-300">
            <div className="w-3/4 xl:w-3/5 mx-auto grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts
                    .filter((post) => post.published == true)
                    .map((post) => (
                        <Card
                            key={post.id}
                            image={post.image}
                            title={post.title}
                            content={post.content}
                            tags={post.tags}
                        ></Card>
                    ))}
            </div>
        </main>
    );
}

export default Main;
