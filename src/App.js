import React from 'react';
 
function App() {
let a = [];
let b = "Vlad"
let c = "Bond"
for(let i = 1; i < 11; i++){
  a.push(<li>{i}</li>)
}
return <>
<ul>{a}</ul>
<div>result:{Math.sqrt(4) }  </div>
<div>result:{b+" "+c}  </div>
</>
}

export default App;