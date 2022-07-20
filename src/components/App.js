import React, { useState } from "react";
import Start from "./start/Start";
import Footer from "./main/Footer";
import Header from "./main/Header";
import Main from "./main/Main";

export default function App() {
    const [startScreen, setStartScreen] = useState(true);
    return (
        <>
            {startScreen ? (
                <Start startScreen={startScreen} setStartScreen={setStartScreen} />
            ) : (
                <>
                    <Header />
                    <Main />
                    <Footer />
                </>
            )}
        </>
    )
}