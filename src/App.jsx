import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import posts from "./data/posts";


function App() {
    let flatTags = posts.flatMap(post => post.tags);
    console.log(flatTags)
    const tagsSet = new Set(flatTags);
    console.log(tagsSet);
    flatTags = Array.from(tagsSet);
    console.log(flatTags)

    return (
        <>
            <Header title={"Il mio blog"}></Header>
            <div className="flex">
                <AsideBar tags={flatTags}></AsideBar>
                <Main titolo="Il mio blog" posts={posts}></Main>
            </div>
            <Footer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas quos aperiam nemo non temporibus nobis quaerat quia
                praesentium. Ex doloribus rem, nihil aliquam quisquam
                voluptatibus? Voluptatem eveniet quaerat reiciendis rerum.
            </Footer>
        </>
    );
}

export default App;
