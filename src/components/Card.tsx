import React from "react";
import {Agent} from "../interfaces/Agent";
type CardProps = {
    agent: Agent
};
type CardState = {
    count: number; // like this
};

export class Card extends React.Component<CardProps, CardState>{
    render(){
        return (
            <div className="card">
                <div className="card-header">
                    <h1>{this.props.agent.displayName}</h1>
                </div>
                <div>
                    <img src={this.props.agent.displayIcon} width="100%" height="250px"/>
                </div>
            </div>
        )
    }
}