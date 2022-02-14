import TextChannel from "./Components/TextChannel";
import ChannelList from "./Components/ChannelList";
import { useState } from "react";
import { nanoid } from 'nanoid';
import Server from "./Components/Server";

function App() {

  const [servers, setServers] = useState({'TWARAN1': {'general':['hey'],'study-group':['hi']},
                                          'TWARAN2': {'general':['hey'],'study-group':['hi'] ,'random':['hello']}
      });

  
  const [currentServer, setCurrentServer]=useState('TWARAN1');
  function addChannelToServer(channelName){
    console.log(servers);
    let modifiedServers= servers;
    let modifiedChannels = modifiedServers[currentServer];
    modifiedChannels[channelName] = [];
    setServers(modifiedServers);
    console.log(modifiedServers);
  }
  function addMessageToChannel(message, channelName){
    let modifiedServers= servers;
    let modifiedChannels = modifiedServers[currentServer];
    modifiedChannels[channelName] = [...modifiedChannels[channelName], message];   
    setServers(modifiedServers);
  }
  function toggleServer(e){
    console.log(servers);
    console.log(e.target.textContent);
    setCurrentServer(String(e.target.textContent));
  }
  return (
    <div className="App">
      <div className="serverListContainer" >
        <div className='serverListTitle'>
          <h2>ServerList</h2>
          <div className='addServerSymbol' >+</div>
        </div>
        <ul className='serverList'>
            {Object.keys(servers).map(name=><li key={nanoid()} >
              <div onClick={toggleServer} data-value={name}>{name}</div>
              </li>)}
            <li>
              <div>
                <input  type="text" 
                        disabled 
                        id="newServerInput" 
                        className='visuallyHidden' 
                        >
                </input>
              </div>
            </li>

        </ul>
      </div>
      <Server currentServer={currentServer} servers={servers} addChannelToServer={addChannelToServer} addMessageToChannel={addMessageToChannel}/>
    </div>
  );
}

export default App;
