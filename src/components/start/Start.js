import Header from "../main/Header";

export default function Start({setStartScreen, setZapGoals, zapGoals, deckType, setDeckType}) {

    function renderFlashcards() {
        if(zapGoals > 0 && zapGoals <= 8 && deckType !== "") {
            setStartScreen(false);
        }
    }

    return (
        <section className="start">
            <Header />
            <select name="deck" id="deck" onChange={(e) => setDeckType(e.target.value)} required>
                <option value="">Escolha um deck:</option>
                <option value="react">React</option>
                <option value="javascript">Javascript</option>
                <option value="html">HTML e CSS</option>
            </select>
            <input
                type="number"
                name="start"
                onChange={e => setZapGoals(e.target.value)}
                placeholder="Digite sua meta de zaps..."
                required>
            </input>
            <button type="button" className={(zapGoals === 0 || deckType === "") ? "disabled" : ""} onClick={renderFlashcards}>Iniciar Recall!</button>
        </section>
    )
}