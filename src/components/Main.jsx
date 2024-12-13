import Card from "./Card";
import { foods } from "../data/foods";

function Main({ titolo }) {
    return (
        <main className="min-h-[85vh] p-5 bg-stone-300">
            <h1 className="text-center text-4xl font-semibold mb-3">
                {titolo}
            </h1>
            <div className="w-3/4 xl:w-3/5 mx-auto grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map((food) => (
                    <Card
                        key={food.id}
                        immagine={food.immagine}
                        titolo={food.titolo}
                        contenuto={food.contenuto}
                    ></Card>
                ))}
            </div>
        </main>
    );
}

export default Main;
