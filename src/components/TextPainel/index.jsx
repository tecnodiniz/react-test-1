import React,{useEffect, useState } from "react";

function TextPainel(props) {

    const [usuarios,setUsuarios] = useState(["Eduardo"]);
 

    useEffect(()=>{
        setUsuarios([...usuarios,props.name])
       
    },[props.name])

    const clearName = () => {
        setUsuarios([""]);
    }
    

    return ( 
        <div>
             <button onClick={clearName} >Limpar</button>
           
          
             {usuarios.map((item) => (
                <p key={item}>{item}</p>
             ) )}
             
            
        </div>
        
    );
}

export default TextPainel;