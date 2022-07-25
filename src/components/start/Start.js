import Header from "../main/Header";

export default function Start({setStartScreen, setZapGoals, zapGoals, deckType, setDeckType}) {

    function renderFlashcards() {
        if (zapGoals > 0 && isCorrectType()) {
            setStartScreen(false);
        }
    }
    
    function isCorrectType() {
        if ((zapGoals <= 8 && deckType === 'react') || (zapGoals <= 7 && deckType === 'javascript') || (zapGoals <= 10 && deckType === 'html')) {
            return true;
        }
        return false;
    }

    return (
        <section className="start">
            <Header />
            <select name="deck" id="deck" onChange={(e) => setDeckType(e.target.value)} required>
                <option value="">Escolha um deck:</option>
                <option value="react">React (8 flashcards)</option>
                <option value="javascript">Javascript (7 flashcards)</option>
                <option value="html">HTML e CSS (10 flashcards)</option>
            </select>
            <input
                type="number"
                name="start"
                onChange={e => setZapGoals(e.target.value)}
                placeholder="Digite sua meta de zaps..."
                required>
            </input>
            <button type="button" className={(zapGoals > 0 && isCorrectType()) ? "" : "disabled"} onClick={renderFlashcards}>Iniciar Recall!</button>
        </section>
    )
}