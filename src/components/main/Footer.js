export default function Footer({ icons, size }) {
    function Complete() {
        if (icons.length === size && icons.includes('close')) {
            return (
                <>
                    <strong>
                        <img src="./assets/img/sad.png" alt="" />
                        Putz...
                    </strong>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </>
            )
        } else if (icons.length === size && !icons.includes('close')) {
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

    return (
        <footer>
            <Complete />
            <h2>{icons.length}/{size} CONCLUÍDOS</h2>
            <div className="icons">
                {icons.map( (icon, index) => {
                    const iconName = `${icon}-circle`;
                    return <ion-icon name={iconName} key={index}></ion-icon>
                })}
            </div>
        </footer>
    )
}