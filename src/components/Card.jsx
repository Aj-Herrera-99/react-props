import { useState, memo, useRef } from "react";
import Badge from "./Badge";
import style from "./Card.module.css";
import mainStyle from "./Main.module.css"

function Card({
    title,
    content,
    image = "https://picsum.photos/200/300",
    tags,
    mainRef
}) {
    // card states
    const [isModal, setIsModal] = useState(false);
    const cardRef = useRef(null);

    // card click event
    const handleCardClick = () => {
        setIsModal(!isModal);
        const card = cardRef.current;
        card.classList.toggle(style.modal);
        const main = mainRef.current;
        main.classList.toggle(mainStyle.overlay);
    };

    console.log("Rendering Card . . .");

    return (
        <div
            ref={cardRef}
            onClick={handleCardClick}
            className={`${style.cardRatio} bg-white flex flex-col rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-stone-500  hover:scale-110 hover:rotate-6 hover:shadow-xl hover:shadow-zinc-700 transition-all`}
        >
            <div className={`h-3/5 bg-red-300`}>
                <img
                    className="h-full w-full object-cover"
                    src={image}
                    alt={title}
                    loading="lazy"
                />
            </div>
            <div
                className={`grow px-3 py-2 flex flex-col justify-between items-start gap-1`}
            >
                <div>
                    <h2 className="text-lg font-semibold line-clamp-1">
                        {title}
                    </h2>
                    <p className="my-1 leading-5 hyphens-auto line-clamp-2">
                        {content}
                    </p>
                </div>
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <Badge key={index} tag={tag}></Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default memo(Card);
