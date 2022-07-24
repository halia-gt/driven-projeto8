import { useState } from "react";
import Flashcard from "./Flashcard";
import Footer from "./Footer";
import Header from "./Header";

const deckOptions = {
    react: [{
        question: 'O que é JSX?',
        answer: 'JSX é uma sintaxe para escrever HTML dentro do JS',
    }, {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces',
    }, {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula',
    }, {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões',
    }, {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
    }, {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências',
    }, {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes',
    }, {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
    }],
    javascript: [{
        question: 'O que é JSX?',
        answer: 'JSX é uma sintaxe para escrever HTML dentro do JS',
    }, {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces',
    }, {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula',
    }, {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões',
    }, {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
    }, {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências',
    }, {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes',
    }, {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
    }],
    html: [
        {
            question: 'O que é JSX?',
            answer: 'JSX é uma sintaxe para escrever HTML dentro do JS',
        }, {
            question: 'O React é __',
            answer: 'uma biblioteca JavaScript para construção de interfaces',
        }, {
            question: 'Componentes devem iniciar com __',
            answer: 'letra maiúscula',
        }, {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões',
        }, {
            question: 'O ReactDOM nos ajuda __',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
        }, {
            question: 'Usamos o npm para __',
            answer: 'gerenciar os pacotes necessários e suas dependências',
        }, {
            question: 'Usamos props para __',
            answer: 'passar diferentes informações para componentes',
        }, {
            question: 'Usamos estado (state) para __',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        }
    ]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



export default function Main({setStartScreen, zapGoals}) {

    const [icons, setIcons] = useState([]);
    const deck = deckOptions.react;

    if (icons.length === 0) {
        shuffle(deck);
    }
    console.log(deck);

    return (
        <main>
            <Header />
            <ul>
                {deck.map((card, index) => (<Flashcard
                    key={index}
                    index={index+1}
                    icons={icons}
                    setIcons={setIcons}
                    {...card}
                />))}
            </ul>
            <Footer icons={icons} setStartScreen={setStartScreen} zapGoals={parseInt(zapGoals)} />
        </main>
    )
}