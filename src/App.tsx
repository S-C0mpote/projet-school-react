import React, {useEffect, useState} from 'react';
import './App.scss';
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Agent} from "./interfaces/Agent";
import {useNavigate} from "react-router-dom";

function App() {
    const URL = 'https://valorant-api.com/v1/agents?language=fr-FR';

    const [agents, setItems] = useState([]);
    const navigate = useNavigate()
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {

                    const filtered: any = [];

                    for (let agent of result.data)
                        if (!filtered.find((ele: { displayName: string, displayIcon: string }) => ele.displayName === agent.displayName)) {
                            filtered.push({
                                displayName: agent.displayName,
                                displayIcon: agent.displayIcon,
                                uuid: agent.uuid,
                                description: agent.description
                            })
                        }
                    setItems(filtered);
                },
            )
    }, [])
    let card_agent: any[] = [];
    agents.forEach((e: Agent) => {
        card_agent.push((
            <div className="agent" onClick={() => navigate('/about')}>
                <Card agent={e} key={e.uuid}/>
            </div>
        ))
    })
    /*
        FAIRE UNE PAGE HOME ET AGENT, COPIER CETTE PAGE DANS AGENT
        FAIRE LES ROUTEURS
     */
    return (
        <div className="App">
            <Header title={"PROJET AVEC VALORANT-API.COM !"}/>
            <div className="agents-container">
                <div className="agents">
                    {card_agent}
                </div>
            </div>
        </div>
    );

}

export default App;
