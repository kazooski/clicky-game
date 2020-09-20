import React from "react";
import "./style.css";


function Navbar(props) {
    return (
        <nav class="navbar sticky-top navbar-light orange-theme">
            <div class="h1 float-left">Clicky Game</div>
            <div class="h4 float-right">{props.gamestate}</div>
            <div class="h4 float-right">Score: {props.score} | Top Score: {props.topScore} </div>
        </nav>
    )
}

export default Navbar;