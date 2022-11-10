import React from "react";
import {Agent} from "../interfaces/Agent";
type CardProps = {
    agent: Agent
};

export default function Card(props: CardProps){
    return (
        <div className="card">
            <div className="card-header">
                <h1>{props.agent.displayName}</h1>
            </div>
            <div>
                <img src={props.agent.displayIcon} width="100%" height="250px" alt={"image"}/>
            </div>
        </div>
    )
}