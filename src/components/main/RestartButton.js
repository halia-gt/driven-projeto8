export default function RestartButton({isCompleted, setStartScreen}) {
        if (isCompleted()) {
            return(
                <button type="button" className="restart" onClick={() => setStartScreen(true)}>REINICIAR RECALL</button>
            )
        } else {
            return (<></>);
        }
}