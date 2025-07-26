import React from "react";
import './StatusPanel.css';

const StatusPanel = () => {
    return(
        <div className="panel-status">
            <div className="waiting">
                <p>В ожидании</p>
            </div>
            <div className="in-progress">
                <p>В процессе</p>
            </div>
            <div className="done">
                <p>Выполнено</p>
            </div>
        </div>
    );
}
export default StatusPanel;