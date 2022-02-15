import TextChannel from "./TextChannel";
import ChannelList from "./ChannelList";
import { useState } from "react";
import { nanoid } from 'nanoid';

function Server(props) {

  const [currentChannel, setCurrentChannel] = useState('general');

  function toggleCurrentChannel(e){
    setCurrentChannel(String(e.target.textContent));
  }

  function addNewChannel(channelName)
  {
    props.addChannelToServer(channelName);
    setCurrentChannel(channelName);
  }
  
  function appendMessage(channel, message){
    props.addMessageToChannel(message,channel);
  }

  return (
    <div className="Server">
      <ChannelList servers={props.servers} currentServer={props.currentServer} toggleCurrentChannel={toggleCurrentChannel} addNewChannel={addNewChannel}/>
      <TextChannel channelName={currentChannel} servers={props.servers} currentServer={props.currentServer} appendMessage={appendMessage} />
    </div>
  );
}

export default Server;
