export default function Answer({answer, setAnswered, setIcon, setState}) {
    function showAnswered() {
        setState('answered');
    }

    function setAnswerStatus(status, icon) {
        setAnswered(status);
        setIcon(icon);
    }

    return (
        <li className="answer">
            <p>{answer}</p>
            <div className="choices">
                <div className="choice incorrect" onClick={() => {
                    showAnswered();
                    setAnswerStatus('incorrect', 'close');
                }}>
                    Não lembrei
                </div>
                <div className="choice almost" onClick={() => {
                    showAnswered();
                    setAnswerStatus('almost', 'help');
                }}>
                    Quase não lembrei
                </div>
                <div className="choice correct" onClick={() => {
                    showAnswered();
                    setAnswerStatus('correct', 'checkmark');
                }}>
                    Zap!
                </div>
            </div>
        </li>
    )
}