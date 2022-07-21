export default function Footer({ icons }) {
    return (
        <footer>
            {/* <strong>
                <img src="./assets/img/sad.png" alt="" />
                Putz...
            </strong>
            <p>Ainda faltam alguns... Mas não desanime!</p>
            <strong>
                <img src="./assets/img/party.png" alt="" />
                Parabéns
            </strong>
            <p>Você não esqueceu de nenhum flashcard!</p> */}
            <h2><span>0</span>/4 CONCLUÍDOS</h2>
            <div className="icons">
                {icons.map( (icon, index) => {
                    const iconName = `${icon}-circle`;
                    return <ion-icon name={iconName} key={index}></ion-icon>
                })}
            </div>
        </footer>
    )
}