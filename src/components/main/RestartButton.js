export default function RestartButton({isCompleted}) {
        if (isCompleted()) {
            return(
                <button type="button" className="restart">REINICIAR RECALL</button>
            )
        } else {
            return (<></>);
        }
}