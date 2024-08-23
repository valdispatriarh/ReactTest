
import React, { useState } from 'react';
import s from './App.module.css';

function App() {
    let [userDisOrNonDis, setB] = useState(false);
    let unblockBtn = userDisOrNonDis ?  s.btn3 : s.btn3block
    function funSetB(){
        setB(!userDisOrNonDis)
        
        
    }


    return (
        <div class="id1">
            <button className={unblockBtn} onClick={funSetB}>
                block
            </button>
            <button id="btn2" disabled={userDisOrNonDis}>
                <img src="foto-bl.png" alt="Button 2" />
            </button>
            <button className={!userDisOrNonDis ?  s.btn3 : s.btn3block} onClick={funSetB}>
                unblock
            </button>
        </div>
    );
}

export default App; 