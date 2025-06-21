
// import * as React from "react";

// @ts-ignore
export default function MemoryCard ({handleClick}) {
    const emojiArr = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵']
    // const [openedCards, setOpenedCards] = React.useState<number[]>([])

    //random card pos.
    for (let i = 0; i < emojiArr.length; i++) {
        let temp = emojiArr[i]
        let r = Math.floor(Math.random() * emojiArr.length)
        emojiArr[i] = emojiArr[r]
        emojiArr[r] = temp
    }

    const emojiElem = emojiArr.map((emoji, index) =>
        <li className="emoji" key={index}>
            <button
                className="card-btn"
                onClick ={handleClick}
            >
                {emoji}
            </button>
        </li>
    )

    return (
            <div className="game">{emojiElem}</div>
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