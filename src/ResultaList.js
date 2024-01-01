import React from "react"


function Resultats(props){
    return(
        <div className="Resu"style={{"border":"2px solid green","padding":"20px","margin":"20px"}}>

<h1>composant Resultats List</h1>
<div style={{"border":"2px solid red","width":"500px","height":"200px","margin":"20px","padding":'20px'}}>

<ul>
   
    {props.Resu.map((e,index)=>{
        return <li key={e.index}>{e.nom}</li>
    })}
</ul>



</div>


        </div>
    )
}
export default Resultats;