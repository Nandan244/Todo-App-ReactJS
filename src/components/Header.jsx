import React from "react";
import Timer from "./Timer";

function Header(){
    return (
        <header>
            
            <h1 ><i class="fas fa-clipboard-check fa-1x"></i> ToDo App</h1>
            <Timer/>
        </header>
    )
}

export default Header;