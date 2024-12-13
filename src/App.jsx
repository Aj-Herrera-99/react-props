import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./data/posts";
import { useState } from "react";


function App() {
    let flatTags = data.flatMap(item => item.tags);
    const tagsSet = new Set(flatTags);
    flatTags = Array.from(tagsSet);

    // states
    const [posts, setPosts] = useState([...data]);
    console.log(posts)

    return (
        <>
            <Header title={"Il mio blog"}></Header>
            <div className="flex">
                <AsideBar tags={flatTags} posts={[...data]} setPosts={setPosts}></AsideBar>
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
