import React, { useState } from "react";
import './OneTasck.css';
import statusPanel from "./StatusPanel.js";

const OneTasck = (tasck) => {

    return(
        <div key={OneTasck.id} className="one-tasck-panel">
            <div className="name-tasck">
                {OneTasck.tasck}
                <h3 className="name-tasck"></h3>
                <button className="button-state">
                    <statusPanel/>
                    ${statusTasck.value}</button>
                <div className="icon-delete" onClick={() => removeTasck(OneTasck.id)}>🗑️</div>
            </div>
            <p className="tasck-description"></p>
            <hr className="line-date"/>
            <div className="date"></div>
        </div>
    );

    
    
}

export default OneTasck;