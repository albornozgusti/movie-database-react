import React from "react";

interface ChildrenContainer {
    children: React.ReactNode
}

const Header = ({children}: ChildrenContainer) => {
    return(
    <header className="header">
        <div>LOGO</div>
        <div>Gustalb MDB</div>
    </header>
    )
}

export default Header;