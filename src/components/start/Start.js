import Header from "../main/Header";

export default function Start({setStartScreen}) {
    return (
        <section className="start">
            <Header />
            <button type="button" onClick={() => setStartScreen(false)}>Iniciar Recall!</button>
        </section>
    )
}