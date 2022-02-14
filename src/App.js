import TextChannel from "./Components/TextChannel";
import ChannelList from "./Components/ChannelList";
import { useState } from "react";
import { nanoid } from 'nanoid';

function App() {

  const [channels, setChannels] = useState({'general':['hey'],'study-group':['hi']});

  const [currentChannel, setCurrentChannel] = useState('general');

  function appendMessage(channel, message){
    let modifiedChannels = channels;
    modifiedChannels[channel] = [...channels[channel], message];
    setChannels(modifiedChannels);
  }

  return (
    <div className="App">
      <ChannelList channelList={Object.keys(channels)} />
      <TextChannel channelName={currentChannel} appendMessage={appendMessage} messages={channels} />
    </div>
  );
}

export default App;
