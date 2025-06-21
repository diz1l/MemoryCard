import './index.css'
import MemoryCard from "./Components/MemoryCard.tsx";
import Form from "./Components/Form.tsx";
import * as React from "react";

export default function App() {
    const [isStarted, setIsStarted] = React.useState(false);

    function startGame() {
        setIsStarted(true)
    }

    function turnCard() {
        console.log("Memory card clicked")
    }

    return (
        <main>
            <h1>Memory Card</h1>
            {!isStarted && <Form handleSubmit={startGame} />}
            {isStarted && <MemoryCard handleClick={turnCard} />}
        </main>
    )
}


