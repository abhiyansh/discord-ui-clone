import TextChannel from "./Components/TextChannel";
import ChannelList from "./Components/ChannelList";
import { useState } from "react";
import { nanoid } from 'nanoid';
import Server from "./Components/Server";

function App() {

  const [servers, setServers] = useState({'TWARAN1': {'general':['hey'],'study-group':['hi']},
                                          'TWARAN2': {'general':['hey'],'study-group':['hi']}
      });

  
  const [currentServer, setCurrentServer]=useState('TWARAN1');
  function addChannelToServer(channelName){
    let modifiedServers= servers;
    let modifiedChannels = modifiedServers[currentServer];
    modifiedChannels[channelName] = [];
    setServers(modifiedServers);
    
  }
  function addMessageToChannel(message, channelName){
    let modifiedServers= servers;
    let modifiedChannels = modifiedServers[currentServer];
    modifiedChannels[channelName] = [...modifiedChannels[channelName], message];   
    setServers(modifiedServers);
  }
  return (
    <div className="App">
      <div className="serverListContainer" >Server List</div>
      <Server currentServer={currentServer} servers={servers} addChannelToServer={addChannelToServer} addMessageToChannel={addMessageToChannel}/>
    </div>
  );
}

export default App;
