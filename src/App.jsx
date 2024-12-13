import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import posts from "./data/posts";


function App() {
    let tagsArr = [];
    posts.forEach(post => tagsArr.push(post.tags));
    tagsArr = tagsArr.flat();
    const tagsSet = new Set(tagsArr);
    while(tagsArr.length){
        tagsArr.pop();
    }
    tagsSet.forEach(val => tagsArr.push(val))
    console.log(tagsArr);

    return (
        <>
            <Header title={"Il mio blog"}></Header>
            <div className="flex">
                <AsideBar tags={tagsArr}></AsideBar>
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
