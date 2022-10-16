import React from "react";

export class AgentHeader extends React.Component<{ title: string }, any>{
    render(){
        return (
            <div className="name-header">
                <span>{this.props.title}</span>
            </div>
        )
    }
}