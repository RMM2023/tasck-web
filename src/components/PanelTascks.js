import React from "react";
import '/.PanelTascks.css';

const PanelTascks = () => {
    return(
        <div className="no_tascks">
                <h3>Нет задач</h3>
                <div className="icon-tasc">📝</div>
                <p>Добавьте задачу чтобы начать работу</p>
        </div>
    );
}

export default PanelTascks;