import React, { useState } from "react"


function Cherchbar(props){
    const [type,setType]=useState("") 
    const RecherchOlympic = (event)=>{
  props.Cherchbar(type)
  console.log(Cherchbar)
    }
    return(
        <div className="cherbar" style={{"border":"2px solid red","padding":"20px","margin":"20px"}}>
<h1>Composant cherchbaar</h1>

<p1>Entrer le mot clé de la recherch:</p1>
<br/>
<input type="text" placeholder="wriht here..."  value={type} onChange={(event)=>setType(event.target.value)}></input >
<br/>
<input type="button" value={"recherch"} onClick={RecherchOlympic}></input>
        </div>
    )
}
export default Cherchbar;