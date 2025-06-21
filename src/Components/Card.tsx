import {useState} from "react";

interface Props {
    index: number;
    onClick : (index : number) => void;
    emoji : string;
}

const Card = ({index, onClick, emoji} : Props) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(true);
        onClick(index);
        // console.log(index);
    }

    return (
        <li className="emoji" key={index}>
            <button
                className="card-btn"
                onClick ={handleClick}
            >
                {visible && emoji }
            </button>
        </li>
    )
}

export default Card;