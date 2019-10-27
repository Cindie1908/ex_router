import React from 'react';
import {useHistory} from 'react-router-dom';

function History (){
    let history=useHistory()
    return (
        <div>
            <h1>Notre Histoire</h1>
            <button onClick={()=>history.push("/")}>Retour à l'accueil</button>
        </div>
    )
}

export default History