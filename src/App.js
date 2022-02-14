import TextChannel from "./Components/TextChannel";
import ChannelList from "./Components/ChannelList";
import { useState } from "react";
import { nanoid } from 'nanoid';

function App() {

  const [channels, setChannels] = useState({'general':['hey'],'study-group':['hi']});

  const [currentChannel, setCurrentChannel] = useState('general');

  function  toggleCurrentChannel(e){

    setCurrentChannel(String(e.target.textContent));
    
  }
  function appendMessage(channel, message){
    let modifiedChannels = channels;
    modifiedChannels[channel] = [...channels[channel], message];
    setChannels(modifiedChannels);
  }

  return (
    <div className="App">
      <div className="serverListContainer">Server List</div>
      <ChannelList channelList={Object.keys(channels)} toggleCurrentChannel={toggleCurrentChannel}/>
      <TextChannel channelName={currentChannel} appendMessage={appendMessage} messages={channels} />
    </div>
  );
}

export default App;
