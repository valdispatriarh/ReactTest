
import React, { useState } from 'react';

function App() {
    let [userDisOrNonDis, setB] = useState(false);
	let newState = false
    // let handleSetB = () => {
    //     setB(prevState => {

    //         document.getElementById("btn1").disabled = !newState;
    //         document.getElementById("btn2").disabled = !newState;
    //         document.getElementById("btn3").disabled = newState;
	// 		newState = !userDisOrNonDis;
    //         console.log(newState);
    //         return newState;
    //     });
    // };

   

    return (
        <div>
            <button id="btn1" onClick={() => setB(true)} disabled={userDisOrNonDis}>
                blok
            </button>
            <button id="btn2">
                <img src="foto-bl.png" alt="Button 2" />
            </button>
            <button id="btn3" onClick={() => setB(false)} disabled={!userDisOrNonDis}>
                unblock
            </button>
        </div>
    );
}

export default App; 