import Flashcard from "./Flashcard";

export default function Main() {
    const deck = [{
            question: 'O que é JSX?',
            answer: 'JSX é uma sintaxe para escrever HTML dentro do JS'
        }, {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces'
        }, {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula'
        }, {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões'
        }, {
            question: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma'
        }, {
            question: 'Usamos o npm para __',
            answer: 'gerenciar os pacotes necessários e suas dependências'
        }, {
            question: 'Usamos props para __',
            answer: 'passar diferentes informações para componentes'
        }, {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
        }
    ]

    return (
        <main>
            <ul>
                <li className="question">
                    <p>O que é JSX?</p>
                    <img src="./assets/img/seta.svg" alt="turn" />
                </li>
                <li className="answer">
                    <p>dizer para o React quais informações quando atualizadas devem renderizar a tela novamente</p>
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

                {deck.map((card, index) => (<Flashcard key={index} index={index+1} {...card} />))}
            </ul>
        </main>
    )
}