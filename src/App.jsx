import React,{ useState,useEffect } from "react";

function App(props) {

    const [usuario, setUsuario] = useState("");
    const [usuarios,setUsuarios] = useState(['Eduardo']);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setUsuarios([...usuarios,"Diniz"])
    //     },3000)

    // },[])
  function addUser(){
    if(usuario)
    setUsuarios([...usuarios,usuario]);
  }
  function clearUsers(){
    setUsuarios([""]);
  }

    return (
        <div className="App">
            <input type="text"
            onInput={(event)=>{setUsuario([event.target.value])}} />

            <button onClick={addUser}>Adicionar</button>
            <button onClick={clearUsers}>Limpar</button>

            <div>
                {usuarios.map((item)=>(<p>{item}</p>))}
            </div>

        </div>
    );
}

export default App;