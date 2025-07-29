import React, { use, useState } from "react";
import './PanelTascks.css';
import oneTasck from "./OneTasck.js";
import React, {useState} from "react";

const PanelTascks = () => {
    useState(tasck, setTasck) = state(false)
    useState(tascksList, setTascksList) = state([])
    const addTasck = (userInput) => {
        if(userInput){
            const newItem = {
                id: Math.random().toString(60).substring(2,9),
                tasck: userInput,
                complete: false
            }
            setTasck([...todos, newItem])
        }
    }
    const removeTasck = () => {

    }
    const handleToggle = () => {

    }

    if(tasck === false){
        return(
            <form onSubmit={handleSubmit}>
                <div className="no-tascks">
                    <h3>Нет задач</h3>
                    <div className="icon-tasck">📝</div>
                    <p>Добавьте задачу чтобы начать работу</p>
                </div>
            </form>
            
        );
    }else{
        content = <div className="tasks-list">
            <oneTasck addTasck={addTasck}/>
            {tascksList.map(() => {
                return(
                    <oneTasck
                    tasck = {tasck}
                    key={tasck.id}
                    toggleTasck={handleToggle}
                    removeTasck={removeTasck}
                    />
                )
            })}
            </div>
    }
    
}

export default PanelTascks;