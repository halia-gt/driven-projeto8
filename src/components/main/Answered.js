export default function Question({answered, icon, index}) {
    const className = `answered ${answered}`;
    const iconName = `${icon}-circle`;

    return (
        <li className={className}>
            <p>Pergunta <span>{index}</span></p>
            <ion-icon name={iconName}></ion-icon>
        </li>
    );
}