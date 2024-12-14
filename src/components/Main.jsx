import Card from "./Card";

function Main({posts}) {
    console.log("Rendering Main . . .");

    return (
        <main className=" overflow-y-scroll p-5 bg-stone-300">
            <div className="w-3/4 xl:w-3/5 mx-auto grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts
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
