import React from "react";

const Default = () => {
    const defaultImg = 'https://i2.wp.com/nerdarchy.com/wp-content/uploads/2018/09/Dungeon-Master.jpg?fit=970%2C545&ssl=1';

    return (
        <div>
            <img src = {defaultImg} className = "characterPic" alt = "A Dragon" />
            
            <h1>Default</h1>
        
            <p>This is the default class</p>

        </div>
    );
};

export default Default;
