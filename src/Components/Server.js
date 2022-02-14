import TextChannel from "./TextChannel";
import ChannelList from "./ChannelList";
import { useState } from "react";
import { nanoid } from 'nanoid';

function Server(props) {

  const [channels, setChannels] = useState({'general':['hey'],'study-group':['hi']});

  const [currentChannel, setCurrentChannel] = useState('general');

  function  toggleCurrentChannel(e){

    setCurrentChannel(String(e.target.textContent));
    
  }

  function addNewChannel(channelName)
  {
    props.addChannelToServer(channelName);
    setChannels(props.servers[props.currentServer]);
    setCurrentChannel(channelName);
  }
  function appendMessage(channel, message){
      console.log(channel,message);
    props.addMessageToChannel(message,channel);
    setChannels(props.servers[props.currentServer]);
  }

  return (
    <div className="Server">
      <ChannelList channelList={Object.keys(props.servers[props.currentServer])} toggleCurrentChannel={toggleCurrentChannel} addNewChannel={addNewChannel}/>
      <TextChannel channelName={currentChannel} appendMessage={appendMessage} messages={props.servers[props.currentServer]} />
    </div>
  );
}

export default Server;
