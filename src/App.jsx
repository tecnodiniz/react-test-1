import React,{ useState,useEffect } from "react";
import TextPainel from "./components/TextPainel";

function App() {

    const [usuario, setUsuario] = useState("");
    const [name,setName] = useState("");

    // useEffect(() => {
    //     setTimeout(() => {
    //         setUsuarios([...usuarios,"Diniz"])
    //     },3000)

    // },[])

  function addUser(){
    if(usuario)
    setName([usuario]);
    setUsuario([]);
  }
    return (
        <div className="App">
            <p>Usuario: {name}</p>
            <input type="text"
            value={usuario}
            onInput={(event)=>{setUsuario([event.target.value])}} />

            <button onClick={addUser}>Adicionar</button>
            
            <TextPainel name = {name}/>

        </div>
    );
}

export default App;