import React from "react";
import "./style.css";

const Image = props => (
    <div class="card card-chan" onClick={() => props.scoreCount(props.id)}>
        <div class="image-chan">
            <img alt={props.alt} src={props.image} />
        </div>
    </div>

)


export default Image;