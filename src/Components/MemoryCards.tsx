// import * as React from "react";

import Card from "./Card.tsx";

interface CardProps {
    handleClick : (index : number) => void;
}

export default function MemoryCards ({handleClick} : CardProps) {
    const emojiArr = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵']
    //перенести в json или отдельный обьект

    //random card pos.
    for (let i = 0; i < emojiArr.length; i++) {
        let temp = emojiArr[i]
        let r = Math.floor(Math.random() * emojiArr.length)
        emojiArr[i] = emojiArr[r]
        emojiArr[r] = temp
    }

    return (
        <div className="game">
            {emojiArr.map((emoji, index) => (
                <Card key={index} emoji={emoji} index={index} onClick={handleClick} />
            ))}
        </div>
    )
}

// <button className="emoji"> 🐶 </button>
// <button className="emoji"> 🐷 </button>
// <button className="emoji"> 🐙 </button>
// <button className="emoji"> 🐛 </button>
// <button className="emoji"> 🐶 </button>
// <button className="emoji"> 🐵 </button>
// <button className="emoji"> 🐷 </button>
// <button className="emoji"> 🐵 </button>
// <button className="emoji"> 🐙 </button>
// <button className="emoji"> 🐛 </button>