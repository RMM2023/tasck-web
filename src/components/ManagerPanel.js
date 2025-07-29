import React from "react";
import { useState } from "react";
import './ManagerPanel.css';
import panelTascks from "./PanelTascks";

const ManagerPanel = ({ addTasck }) => {
    const [userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTasck(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleSubmit(e)
        }
    }
    return(
        <div className="manager-panel">
            <div className="manager-panel-main">
                <h5>Менеджер задач</h5>
                <p>Эффективно планируйте задачи</p>
                <form onSubmit={handleSubmit}>
                    <input
                    value={userInput}
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Введине задачу..."
                    />
                </form>
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