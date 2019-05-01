import React from "react";
import ReactDOM from "react-dom";
import { Conditional } from "../Lib";
const App = () => {
    return (
        <div>
            <Conditional cond={false}>
                <h1 data-types="if">jika benar</h1>
                <h1 data-types="else">jika salah</h1>
            </Conditional>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
