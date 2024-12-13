function Badge({ tag }) {
    // classes
    const bgColor = (tag) => {
        switch (tag) {
            case "html":
                return "bg-orange-500";
            case "css":
                return "bg-sky-400";
            case "js":
                return "bg-yellow-500";
            case "php":
                return "bg-cyan-800";
            default:
                return "bg-stone-700"
        }
    };

    return (
        <button className={`${bgColor(tag)} text-white px-4 py-1 uppercase rounded-md hover:scale-105`}>
            {tag}
        </button>
    );
}

export default Badge;
