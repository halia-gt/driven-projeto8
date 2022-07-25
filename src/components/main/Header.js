import logo from "../../assets/img/logo.svg";

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </header>
    );
}