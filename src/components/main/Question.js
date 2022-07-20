export default function Question({question, setState}) {
    function showAnswer() {
        setState('answer');
    }

    return (
        <li className="question">
            <p>{question}</p>
            <img src="./assets/img/seta.svg" alt="turn" onClick={showAnswer} />
        </li>
    )
}