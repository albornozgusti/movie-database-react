import React from "react";

interface ChildrenContainer {
    title: string;
}

const Header = ({title}: ChildrenContainer) => {
    return(
    <header className="header">
        <div>LOGO</div>
        <div>{title}</div>
    </header>
    )
}

export default Header;