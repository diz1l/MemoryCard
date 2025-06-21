import './index.css'
import MemoryCards from "./Components/MemoryCards.tsx";
import Form from "./Components/Form.tsx";
import * as React from "react";

export default function App() {
    const [isStarted, setIsStarted] = React.useState(false);
    // const [openedCards, setOpenedCards] = React.useState<number[]>([])
    //сравнения 2х

    function startGame() {
        setIsStarted(true)
    }

    function turnCard(index: number) {
        console.log("Memory card clicked")
        console.log(index);
    }

    return (
        <main>
            <h1>Memory Card</h1>
            {!isStarted && <Form handleSubmit={startGame} />}
            {isStarted && <MemoryCards handleClick={turnCard} />}
        </main>
    )
}


