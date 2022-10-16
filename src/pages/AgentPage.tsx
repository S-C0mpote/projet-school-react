import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {AgentHeader} from "../components/AgentHeader";
function AgentPage() {
    useLocation();
    const { uuid } = useParams();
    const URL = `https://valorant-api.com/v1/agents/${uuid}?language=fr-FR`;
    const [agent, setAgent] = useState({
        displayName: "",
        uuid: "",
        displayIcon: "",
        description: "",
        ultime: ""
    });

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    const abilities = result.data.abilities;
                    let ulti = "";
                    abilities.forEach((e:any) => {
                        if(e.slot === 'Ultimate'){
                            ulti = e.displayIcon;
                        }
                    })
                    setAgent({displayName: result.data.displayName, displayIcon: result.data.displayIcon,
                        description: result.data.description, uuid: result.data.uuid, ultime: ulti});
                },
            )
    }, [URL])

    return (
        <div className="container">
            <AgentHeader title={agent.displayName}/>
            <div className="middle">
                <div className="description">
                    <h1>Description : </h1>
                    <span>{agent.description}</span>
                </div>
            </div>
            <div className="logo">
                <img src={agent.ultime} alt={"ultime"}/>
            </div>
            <img src={agent.displayIcon} id="iconAgent" alt={"profil"}/>
        </div>
    )
}
export default AgentPage;