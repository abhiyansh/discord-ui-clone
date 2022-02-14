import TextChannel from "./Components/TextChannel";
import ChannelList from "./Components/ChannelList";
import { useState } from "react";
import { nanoid } from 'nanoid';

function App() {

  const [channels, setChannels] = useState(['general', 'study-group']);

  return (
    <div className="App">
      <ChannelList channels={channels} />
      {channels.map(channel=><TextChannel name={channel} key={nanoid()}/>)}
    </div>
  );
}

export default App;
