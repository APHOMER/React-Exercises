import { useState, useEffect } from "react";

const RandomQuoteURL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteFetcher() {
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
       fetchQuote();
    }, []);

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const res = await fetch(RandomQuoteURL);
    //         const jsonRes = await res.json();
    //         const randomQuote = jsonRes.quote;
    //         setQuote(randomQuote);
    // }
    // getInitialQuote();
    // }, []);


    async function fetchQuote() {
        const res = await fetch(RandomQuoteURL);
        const jsonRes = await res.json();
        const randomQuote = jsonRes.quote;
        setQuote(randomQuote);

    } 


    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}

export default QuoteFetcher;


