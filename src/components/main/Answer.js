export default function Answer({answer, setAnswered, icons, setIcons, setIcon, setState}) {
    function showAnswered() {
        setState('answered');
    }

    function setAnswerStatus(status, iconName) {
        setAnswered(status);
        setIcons([...icons, iconName]);
        setIcon(iconName);
    }

    return (
        <li className="answer">
            <p>{answer}</p>
            <div className="choices">
                <div className="choice incorrect" onClick={() => {
                    setAnswerStatus('incorrect', 'close');
                    showAnswered();
                }}>
                    Não lembrei
                </div>
                <div className="choice almost" onClick={() => {
                    setAnswerStatus('almost', 'help');
                    showAnswered();
                }}>
                    Quase não lembrei
                </div>
                <div className="choice correct" onClick={() => {
                    setAnswerStatus('correct', 'checkmark');
                    showAnswered();
                }}>
                    Zap!
                </div>
            </div>
        </li>
    )
}