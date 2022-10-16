import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Agent} from "../interfaces/Agent";
import {Card} from "../components/Card";
import {Header} from "../components/Header";

function Home() {
    const URL = 'https://valorant-api.com/v1/agents?language=fr-FR';

    const [agents, setItems] = useState([]);
    const [loading, setLoaded] = useState(true)
    const navigate = useNavigate()
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setLoaded(false);
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
            <div className="agent" onClick={() => navigate('/agent/' + e.uuid,{state:{agent:e}})} key={e.uuid}>
                <Card agent={e} key={e.uuid}/>
            </div>
        ))
    })

    return (
        <div className="home">
            <Header title={"PROJET AVEC VALORANT-API.COM !"}/>
            <div className="agents-container">
                <div className="agents">
                    {card_agent}
                </div>
            </div>
        </div>
    );
}
export default Home;