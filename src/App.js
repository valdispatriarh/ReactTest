import React from 'react';
 
function App() {
let a = [];
let b = "Vlad"
let c = "Bond"
let x = false
let text
const isAdult = 1;
let sms
let isAdmin = true
let qwe
let age = false
const isAuth = false;



function show(user) {
  alert(user);
}
function getDigitsSum(num) {
  let sum = 0
  let strnum = String(num)
  for(let i = 0; i < strnum.length; i++){
    sum = sum + +strnum[i]
  }
  return sum
}
for(let i = 1; i < 11; i++){
  a.push(<li key={i}>{i}</li>)
}
if(x){
  text = <p>true</p>
} 
if(isAdult >= 18){
  sms = <div>hello</div>
} else {
  sms = <div>You is less 18 yeas old</div>
}
if(isAdmin){
  qwe = 
  <><p>a</p>
  <p>d</p>
  <p>m</p>
  <p>i</p>
  <p>n</p>
</>
}
  




return <>
<ul>{a}</ul>
<div>result:{Math.sqrt(4) }  </div>
<div>result:{b+" "+c}  </div>
{text}
{sms}
{qwe}
{age ? <p>hey</p> : <p>wait 18</p>}
{!isAuth && <div><p>please, sing in</p></div>}
<p>{getDigitsSum(12345)}</p>
<button value="1" onClick={()=>show("1")}>1</button>
<button onClick={()=>show("2")}>2</button>
<button onClick={()=>show("3")}>3</button>
<button onClick={console}>console</button>
</>
}
export default App;