

type Props = {
    handleClick: () => void;
    children: React.ReactNode;
};

export default function RegularBtn({ handleClick, children }: Props) {
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
}
