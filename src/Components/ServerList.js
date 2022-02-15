import { nanoid } from "nanoid";
import { useState } from 'react';

function ServerList(props){

    function addServer(e){
        const inputDiv = document.getElementById('newServerInputContainer');
        inputDiv.classList.toggle('visuallyHidden');
        
        const input = document.getElementById('newServerInput');
        input.removeAttribute('disabled');
    }

    const [newServerName, setNewServerName]=useState("");
    function onKeyPress(e){
        if(e.key=='Enter') {
            props.addNewServer(newServerName);
            setNewServerName(""); 
            const inputDiv = document.getElementById('newServerInputContainer');
            inputDiv.classList.toggle('visuallyHidden');
        }
    }

    function onNewServer(e){
        setNewServerName(e.target.value);
      }

    let serverList = Object.keys(props.servers).map(name =>
        <li key={nanoid()} >
            <div onClick={props.toggleServer} data-value={name}>{name}</div>
        </li>
        );

    return (
        <div className="serverListContainer" >
        <div className='serverListTitle'>
          <h2>ServerList</h2>
          <div className='addServerSymbol' onClick={addServer}>+</div>
        </div>
        <ul className='serverList'>
            {serverList}
            <li>
              <div id="newServerInputContainer" className='visuallyHidden'>
                <input  type="text" 
                        disabled 
                        id="newServerInput" 
                        className='visuallyHidden'
                        value={newServerName}
                        onKeyPress={onKeyPress}
                        onChange={onNewServer}
                        >
                </input>
              </div>
            </li>

        </ul>
      </div>
    );
}


export default ServerList