import React, { useState } from "react";
import Start from "./start/Start";
import Main from "./main/Main";

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