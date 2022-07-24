import RestartButton from './RestartButton';

export default function Footer({icons, setDeck, deck, setIcons, shuffle, setStartScreen}) {
    function Complete() {
        if (isCompleted() && icons.includes('close')) {
            return (
                <>
                    <strong>
                        <img src="./assets/img/sad.png" alt="" />
                        Putz...
                    </strong>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </>
            )
        } else if (isCompleted() && !icons.includes('close')) {
            return (
                <>
                    <strong>
                        <img src="./assets/img/party.png" alt="" />
                        Parabéns
                    </strong>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </>
            )
        } else {
            return (<></>)
        }
    }

    function isCompleted() {
        return (icons.length === deck.length);
    }

    return (
        <footer>
            <Complete />
            <h2>{icons.length}/{deck.length} CONCLUÍDOS</h2>
            <div className="icons">
                {icons.map( (icon, index) => {
                    const iconName = `${icon}-circle`;
                    return <ion-icon name={iconName} key={index}></ion-icon>
                })}
            </div>
            <RestartButton isCompleted={isCompleted} deck={deck} setDeck={setDeck} setIcons={setIcons} shuffle={shuffle} setStartScreen={setStartScreen} />
        </footer>
    )
}