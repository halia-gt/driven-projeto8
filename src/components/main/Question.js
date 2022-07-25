import turn from "../../assets/img/seta.svg";

export default function Question({question, setState}) {
    function showAnswer() {
        setState('answer');
    }

    return (
        <li className="question">
            <p>{question}</p>
            <img src={turn} alt="turn" onClick={showAnswer} />
        </li>
    );
}