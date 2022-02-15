import { useState } from "react";
import Server from "./Components/Server";
import ServerList from "./Components/ServerList"



function App() {

  const [servers, setServers] = useState(
    {
      'TWARAN1': {'general':['hey'],'study-group':['hi']},
      'NEEV': {'general':['hey'],'study-group':['hi'] ,'random':['hello']}
    });
  const [user,setUser]= useState('XYZ');
  const [userId, setUserId]= useState('1010');
  
  const [currentServer, setCurrentServer]=useState('TWARAN1');
  
  function addChannelToServer(channelName){
    let modifiedServers= servers;
    modifiedServers[currentServer][channelName] = [];
    setServers(modifiedServers);
  }
  
  function addMessageToChannel(message, channelName){
    let modifiedServers= servers;
    modifiedServers[currentServer][channelName] = [...modifiedServers[currentServer][channelName], message];   
    setServers(modifiedServers);
  }
  
  function toggleServer(e){
    setCurrentServer(e.target.getAttribute("data-value"));
  }
  
  function addNewServer(serverName){
    let modifiedServers = servers;
    modifiedServers[serverName] = {'general':[],'study-group':[]};
    setServers(modifiedServers);
  }
  
  return (
    <div className="App">
        <ServerList servers={servers} currentServer={currentServer} toggleServer={toggleServer} addNewServer={addNewServer}/>
        <Server user={user} userId={userId} currentServer={currentServer} servers={servers} addChannelToServer={addChannelToServer} addMessageToChannel={addMessageToChannel}/>

    </div>
  );
}

export default App;
