import { useState, useEffect } from "react";
import "./Main.css";

export const Main = () => {
    const [giphs, setGiphs] = useState([])
    const [term, setTerm] = useState("")

    const onChangeTextInput = (event) => {
        setTerm(event.target.value)
    };

    const fetchGifs = () => {
        let APIKEY = "uXlXaMIGfT5aHj9kiQP9XBEhCeiOUHk3"
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=${term}`)
            .then((response) => response.json())
            .then((data) => {
                setGiphs(data.data)
            })
    }

    useEffect(fetchGifs, [term]);




    return (
        <div className="container">
            <h1>Search Giphy</h1>
            <div className="searchbar">

                <input id="search" type="search" value={term} onChange={onChangeTextInput} />

            </div>
            <div id="results">
                {giphs.map(item => (
                    <div className="card"><img src={item.images.original.url} className="gif" alt="gif" /></div>
                ))}
            </div>
        </div>
    )
}