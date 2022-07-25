import RestartButton from './RestartButton';

export default function Footer({icons, setStartScreen, zapGoals, deck}) {
    function Complete() {
        if (isCompleted() && !verifyZaps()) {
            return (
                <>
                    <strong>
                        <img src="./assets/img/sad.png" alt="" />
                        Putz...
                    </strong>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </>
            )
        } else if (isCompleted() && verifyZaps()) {
            return (
                <>
                    <strong>
                        <img src="./assets/img/party.png" alt="" />
                        Parabéns
                    </strong>
                    <p>Você concluiu a meta de Zaps!</p>
                </>
            )
        } else {
            return (<></>)
        }
    }

    function verifyZaps() {
        let countZap = 0;
        icons.forEach(icon => {
            if (icon === 'checkmark') {
                countZap++;
            }
        })
        return (countZap >= zapGoals);
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
            <RestartButton isCompleted={isCompleted} setStartScreen={setStartScreen} />
        </footer>
    )
}