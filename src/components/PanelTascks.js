import React from "react";
import panelTascks from '/.PanelTascks.css';
import oneTasck from "./OneTask.js";

const PanelTascks = () => {
    const oneTasck = () => (<oneTasck/>)
    return(
        <div className="no_tascks">
                <h3>Нет задач</h3>
                <div className="icon-tasc">📝</div>
                <p>Добавьте задачу чтобы начать работу</p>
        </div>
    );
}

export default PanelTascks;