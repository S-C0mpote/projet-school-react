import React from "react";
type CardProps = {
    title: string;
    displayUrl: string;
};
type CardState = {
    count: number; // like this
};

export class Card extends React.Component<CardProps, CardState>{
    render(){
        return (
            <div className="card">
                <div className="card-header">
                    <h1>{this.props.title}</h1>
                </div>
                <div>
                    <img src={this.props.displayUrl} width="100%" height="250px"/>
                </div>
            </div>
        )
    }
}