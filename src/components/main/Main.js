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
            question: 'Quais os tipos de dados do JavaScript?',
            answer: 'Number, string, boolean, objeto e undefined',
        }, {
            question: 'O que a função isNan faz?',
            answer: 'Retorna true se o argumento é not a number e false se não for',
        }, {
            question: 'O que é prompt?',
            answer: 'É uma caixa que permite a entrada de texto pelo usuário',
        }, {
            question: 'O que é o operador ===?',
            answer: 'É um operador restrito, retornando true quando dois valores são iguais em valor e tipo',
        }, {
            question: 'Qual o resultado de 3+2+"7"',
            answer: '57',
        }, {
            question: 'Quais os tipo de pop-up disponíveis em JavaScript?',
            answer: 'alert, confirm e prompt',
        }, {
            question: 'O que é type of?',
            answer: 'Um operador que retorna uma string indicando o tipo de variável',
        }],
    html: [
        {
            question: 'Onde referenciar stylesheet externa no HTML?',
            answer: 'na tag <head>',
        }, {
            question: 'Qual propriedade altera a cor de fundo?',
            answer: 'background-color',
        }, {
            question: '__ é usado para alterar a cor de um elemento',
            answer: 'color',
        }, {
            question: 'vh e % são __ em CSS',
            answer: 'unidades',
        }, {
            question: 'Qual a tag genérica com diplay inline do HTML?',
            answer: '<span>',
        }, {
            question: 'Como retirar o underline de uma tag <a>?',
            answer: 'a { text-decoration: none; }',
        }, {
            question: 'Qual a tag semântica apropriada para rodapés?',
            answer: '<footer>',
        }, {
            question: 'Como remover o estilo padrão do navegador?',
            answer: 'Usando CSS reset',
        }, {
            question: 'Que propriedade altera a fonte no CSS?',
            answer: 'font-family',
        }, {
            question: 'Podemos usar __ para selecionar uma classe',
            answer: '.nome-da-classe',
        }
    ]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



export default function Main({setStartScreen, zapGoals, deckType}) {
    let deck;
    if (deckType === 'react') {
        deck = deckOptions.react;
    } else if (deckType === 'javascript') {
        deck = deckOptions.javascript;
    } else if (deckType === 'html') {
        deck = deckOptions.html;
    }

    const [icons, setIcons] = useState([]);

    if (icons.length === 0) {
        shuffle(deck);
    }

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
            <Footer icons={icons} setStartScreen={setStartScreen} zapGoals={parseInt(zapGoals)} deck={deck} />
        </main>
    )
}