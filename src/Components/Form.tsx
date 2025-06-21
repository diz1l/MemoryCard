import RegularBtn from "./RegularBtn.tsx";

type Props = {
    handleSubmit: () => void;
};

export default function Form ({handleSubmit} : Props) {

    return (
        <div className="wrapper" onSubmit={(e) => e.preventDefault()}>
            <RegularBtn handleClick={handleSubmit}>
                Start Game
            </RegularBtn>
        </div>
    )
}