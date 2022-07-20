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
                {deck.map((card, index) => (<Flashcard key={index} index={index+1} {...card} />))}
            </ul>
        </main>
    )
}