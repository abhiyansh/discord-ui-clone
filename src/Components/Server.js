import TextChannel from "./TextChannel";
import ChannelList from "./ChannelList";
import { useState } from "react";
import UserCard from './UserCard'

function Server(props) {
  const [currentChannel, setCurrentChannel] = useState('general');

  function toggleCurrentChannel(e){
    setCurrentChannel(e.target.getAttribute('value'));
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
      <div className="channelListPanel">
      <ChannelList channelName={currentChannel} servers={props.servers} currentServer={props.currentServer} toggleCurrentChannel={toggleCurrentChannel} addNewChannel={addNewChannel}/>
      <UserCard user={props.user} userId={props.userId}/>
      </div>     
      <TextChannel user={props.user} channelName={currentChannel} servers={props.servers} currentServer={props.currentServer} appendMessage={appendMessage} />
    </div>
  );
}

export default Server;
