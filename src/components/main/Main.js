export default function Main() {
    return (
        <main>
            <ul>
                <li className="question">
                    <p>O que é JSX?</p>
                    <img src="./assets/img/seta.svg" alt="turn" />
                </li>
                <li className="answer">
                    <p>PJSX é uma sintaxe para escrever HTML dentro do JS</p>
                    <div className="choices">
                        <div className="choice incorrect">
                            Não lembrei
                        </div>
                        <div className="choice almost">
                            Quase não lembrei
                        </div>
                        <div className="choice correct">
                            Zap!
                        </div>
                    </div>
                </li>
                <li className="answered incorrect">
                    <p>Pergunta <span>3</span></p>
                    <ion-icon name="close-circle"></ion-icon>
                </li>
                <li className="answered almost">
                    <p>Pergunta <span>4</span></p>
                    <ion-icon name="help-circle"></ion-icon>
                </li>
                <li className="answered correct">
                    <p>Pergunta <span>5</span></p>
                    <ion-icon name="checkmark-circle"></ion-icon>
                </li>
                <li>
                    <p>Pergunta <span>6</span></p>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                <li>
                    <p>Pergunta <span>7</span></p>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                <li>
                    <p>Pergunta <span>8</span></p>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                
            </ul>
        </main>
    )
}