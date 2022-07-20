import Header from '../main/Header';

export default function Start({startScreen, setStartScreen}) {
    return (
        <section className="start">
            <Header />
            <button type="button" onClick={() => setStartScreen(!startScreen)}>Iciniar Recall!</button>
        </section>
    )
}