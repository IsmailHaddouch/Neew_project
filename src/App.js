import React, { useState } from 'react';
import Cherchbar from './CherchBar';
import Resultats from './ResultaList';
function App() {
  const list=[
    {nom:"banane",type:"fruit"},
    {nom:"orange",type:"fruit"},
    {nom:"pomme",type:"fruit"},
    {nom:"raisins",type:"fruit"},
    {nom:"kiwi",type:"fruit"},
    {nom:"tomate",type:"legume"},
    {nom:"carotte",type:"legume"},
    {nom:"pomme de terre",type:"legume"},
    {nom:"navet",type:"legume"},
    {nom:"poivron",type:"legume"}
    ]
    const [type,setType]=useState("")
    const[result,setResult]=useState([])
    const CherchBar =(type)=>{
    setType(type)
    setResult(list.filter((ele)=>ele.type.toUpperCase()==type.toUpperCase()))
}

  return (
    <div className="App" style={{"border":"2px solid black","padding":"20px","margin":"20px"}}>
      <h1>Composant parents</h1>
  <Cherchbar Cherchbar={CherchBar} />
<h1>Type:{type}</h1>
<Resultats Resu={result}/>

    </div>
  );
}

export default App;
