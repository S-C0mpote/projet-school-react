import React, {useEffect, useState} from 'react';
import './App.scss';
import {Card} from "./components/Card";
import {Header} from "./components/Header";

function App() {
    const URL = 'https://valorant-api.com/v1/agents?language=fr-FR';

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [agents, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);

                    const filteredCoords: any = [];

                    for(let agent of result.data)
                        if (!filteredCoords.find((ele: { displayName: string, displayIcon: string }) => ele.displayName === agent.displayName)){
                            filteredCoords.push(agent)
                        }
                    setItems(filteredCoords);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        // @ts-ignore
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <Header title={"PROJET AVEC VALORANT-API.COM !"}/>
                <div className="agents-container">
                    <div className="agents">
                        {agents.map(({ uuid, displayName, displayIcon }) => (
                            <Card
                                title={displayName}
                                displayUrl={displayIcon}
                                key={uuid}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
