import React from "react";
type HeaderProps = {
    title: string;
};
type HeaderState = {
    count: number;
};
export class Header extends React.Component<HeaderProps, HeaderState>{
    render() {
        return (
            <div className="header">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}