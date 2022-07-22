import React, { useState } from "react";
import Start from "./start/Start";
import Main from "./main/Main";
import "../assets/css/reset.css";
import "../assets/css/index.css";
import "../assets/css/start.css";
import "../assets/css/header.css";
import "../assets/css/main.css";
import "../assets/css/footer.css";

export default function App() {
    const [startScreen, setStartScreen] = useState(true);
    return (
        <>
            {startScreen ? (
                <Start startScreen={startScreen} setStartScreen={setStartScreen} />
            ) : (
                <Main />
            )}
        </>
    )
}