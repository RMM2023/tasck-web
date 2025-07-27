import React from "react";
import managerPanel from './ManagerPanel.css';
import panelTascks from "./PanelTascks";

const ManagerPanel = () => {
    return(
        <div className="manager-panel">
            <div className="manager-panel-main">
                <h5>Менеджер задач</h5>
                <p>Эффективно планируйте задачи</p>
                <div className="search-tascks">Поиск задачи...</div>
            </div>
            <div className="maneger-panel-min">
                <button className="button-all-tascks">❇️Все задачи</button>
                <button className="button-waiting">✳️В ожидании</button>
                <button className="button-in-progress">💹В процессе</button>
                <button className="button-done">✅Выполненные</button>
                <hr className="manager-line-tascks"/>
                <panelTascks/>
            </div>
        </div>
    )
}
export default ManagerPanel;