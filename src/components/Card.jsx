import { useState } from "react";
import Badge from "./Badge";
import style from "./Card.module.css";

function Card({ titolo, contenuto, immagine }) {
    // card states
    const [modal, setModal] = useState(false);

    // card click event
    const handleCardClick = (e) => {
        setModal(!modal);
    };

    // classes
    const modalClass =
        "fixed w-[70vw] sm:w-[50vw] lg:w-[25vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20";

    return (
        <div
            onClick={handleCardClick}
            className={`${style.cardRatio} bg-white flex flex-col rounded-xl overflow-hidden cursor-pointer shadow-lg shadow-stone-500  hover:scale-110 hover:rotate-6 hover:shadow-xl hover:shadow-zinc-700 transition-all ${
                modal && modalClass
            }`}
        >
            <div className={`h-3/5 bg-red-300`}>
                <img
                    className="h-full object-cover"
                    src={immagine}
                    alt={titolo}
                    loading="lazy"
                />
            </div>
            <div className={`grow px-3 py-2 flex flex-col justify-between items-start gap-1`}>
                <div>
                    <h2 className="text-lg font-semibold line-clamp-1">{titolo}</h2>
                    <p className="my-1 leading-5 hyphens-auto line-clamp-2">
                        {contenuto}
                    </p>
                </div>
                <Badge />
            </div>
        </div>
    );
}

export default Card;
