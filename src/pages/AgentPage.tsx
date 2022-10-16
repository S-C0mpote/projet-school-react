import React, {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
function AgentPage() {
    const location = useLocation();
    const { uuid } = useParams();
    const URL = `https://valorant-api.com/v1/agents/${uuid}?language=fr-FR`;
    const [loading, setLoaded] = useState(true);
    const [agent, setAgent] = useState({
        displayName: undefined,
        uuid: undefined,
        displayIcon: undefined,
        description: undefined
    });

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(
                (result) => {
                    setLoaded(false);
                    setAgent({displayName: result.data.displayName, displayIcon: result.data.displayIcon,
                        description: result.data.description, uuid: result.data.uuid});
                },
            )
    }, [URL])
    if(loading){
        console.log('Loading...')
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <h1>Bienvenue sur la page de {agent.displayName}</h1>
    )
}
export default AgentPage;