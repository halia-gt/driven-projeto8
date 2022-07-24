import Header from "../main/Header";

export default function Start({setStartScreen, setZapGoals, zapGoals}) {

    function renderFlashcards() {
        if(zapGoals > 0 && zapGoals <= 8) {
            setStartScreen(false);
        }
    }

    return (
        <section className="start">
            <Header />
            {/* <label for="deck">Escolha um deck:</label>
            <select name="deck" id="deck" required>
                <option value="react">React</option>
                <option value="javascript">Javascript</option>
                <option value="HTML/CSS">HTML e CSS</option>
            </select> */}
            <input
                type="number"
                name="start"
                onChange={e => setZapGoals(e.target.value)}
                placeholder="Digite sua meta de zaps..."
                required>
            </input>
            <button type="button" className={zapGoals === 0 ? "disabled" : ""} onClick={renderFlashcards}>Iniciar Recall!</button>
        </section>
    )
}