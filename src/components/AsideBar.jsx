function AsideBar({ tags }) {
    return (
        <aside className="bg-stone-700 text-white w-[40vw] p-5">
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </aside>
    );
}

export default AsideBar;
