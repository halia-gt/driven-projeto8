export default function Flashcard({question, answer, index}) {
    return (
        <li>
            <p>Pergunta <span>{index}</span></p>
            <ion-icon name="play-outline"></ion-icon>
        </li>
    )
}