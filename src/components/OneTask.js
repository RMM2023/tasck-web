import React from "react";
import './OneTask.css';
import statusPanel from "./StatusPanel.js";

const OneTasck = ({tasck, onUpdateStatus, onDeleteTasck}) => {
    const statusTasck = [
    {value: 'waiting', label: 'В ожидании', color: '#ff0000'},
    {value: 'in_progress', label: 'В работе', color: '#ffa500'},
    {value: 'in_progress', label: 'Выполнено', color: '#008000'}
];

    if(tasck.leght === 0){
        return(
            <div className="one-tasck-panel">
                <h3>Нет задач</h3>
                <div className="icon-tasc">📝</div>
                <p>Добавьте задачу чтобы начать работу</p>
            </div>
        );
    }else{
        <div className="one-tasck-panel">
            <div className="name-tasck">
                <h3 className="name-tasck"></h3>
                <button className="button-state">
                    <statusPanel/>
                    ${statusTasck.value}</button>
                <div className="icon-delete">🗑️</div>
            </div>
            <p className="tasck-description"></p>
            <hr className="line-date"/>
            <div className="date"></div>

        </div>
    }
    
}

export default OneTasck;