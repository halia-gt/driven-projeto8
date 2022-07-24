export default function RestartButton({isCompleted, deck, setDeck, setIcons, shuffle, setStartScreen}) {


        function restart() {
            setIcons([]);
            const newDeck = [...deck];
            shuffle(newDeck);
            setDeck(newDeck);
            setStartScreen(true);
        }


        if (isCompleted()) {
            return(
                <button type="button" className="restart" onClick={restart}>REINICIAR RECALL</button>
            )
        } else {
            return (<></>);
        }
}