import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Agent} from "../interfaces/Agent";
import Card from "../components/Card";
import {Header} from "../components/Header";
import agentStore, {ADD_AGENT} from "../store/agentStore";

function Home() {
    const URL = 'https://valorant-api.com/v1/agents?language=fr-FR';

    const [agents, setItems] = useState([]);
    const navigate = useNavigate()
    const store = agentStore;
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
    return (
        <div className="home">
            <Header title={"PROJET AVEC VALORANT-API.COM !"}/>
            <div className="last-agents">
                <span>Derniers agents séléctionnés</span>
                <select>
                    {
                        agentStore.getState().agents.map((e: Agent) => {
                            return (
                                <option
                                    onClick={() => {
                                        navigate('/agent/' + e.uuid,{state:{agent:e}});
                                    }}
                                    key={e.uuid}
                                >{e.displayName}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="agents-container">
                <div className="agents">
                    {
                        agents.map((e: Agent) => {
                            return (
                                <div className="agent" onClick={() => {
                                    store.dispatch({type: ADD_AGENT, payload: e});
                                    navigate('/agent/' + e.uuid,{state:{agent:e}});
                                }} key={e.uuid}>
                                 <Card agent={e} key={e.uuid} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default Home;