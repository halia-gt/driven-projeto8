export default function Numbered({index, setState}) {
    function showQuestion() {
        setState('question');
    }

    return (
        <li>
            <p>Pergunta <span>{index}</span></p>
            <ion-icon name="play-outline" onClick={showQuestion}></ion-icon>
        </li>
    )
}