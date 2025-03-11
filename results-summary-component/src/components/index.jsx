import React from "react";
import Result from "./Result";
import Info from "./Info";

const Results = () => {
    return (
        <section className="results">
            <h1>Your Results</h1>
            <Result />
            <Info />
        </section>
    )
}

export default Results