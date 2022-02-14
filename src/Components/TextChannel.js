import React, { useState } from 'react';
import {nanoid} from 'nanoid';

function TextChannel(props) {
    const [message, setMessage] = useState('');

    function onSend(){
        if(!message) return;
        console.log(message);
        props.appendMessage(props.channelName, message);
        
        setMessage("");
    }

    function onChange(e){
        setMessage(e.target.value);
    }

    function onKeyPress(e){
        if(e.key=='Enter') onSend();
    }

    let messageList = props.messages[props.channelName].map(msg=><li key={nanoid()}>{msg}</li>);

  return (
    <div className='container'>
        <h1>#{props.channelName}</h1>
        <ul className='messageList'>
            {messageList}
        </ul>

        <form className='messageBox'>
            <textarea value={message} onChange={onChange} onKeyPress={onKeyPress}></textarea>
        </form>
        
    </div>
  )
}

export default TextChannel