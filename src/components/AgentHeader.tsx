import React from "react";

function AgentHeader(props: {title: string}){
        return (
            <div className="name-header">
                <span>{props.title}</span>
            </div>
        )
}
export default AgentHeader;