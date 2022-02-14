import React, { useState } from 'react';
import {nanoid} from 'nanoid';

function TextChannel(props) {
    const [message, setMessage] = useState('');

    function onSend(e){
        e.preventDefault();
        if(!message) return;
        props.appendMessage(props.channelName, message);
        setMessage("");
    }

    function onChange(e){
        setMessage(e.target.value);
    }
    console.log(props.channelName);
    console.log(props.messages[props.channelName]);
    let messageList = props.messages[props.channelName].map(msg=><li key={nanoid()}>{msg}</li>);

  return (
    <div className='container'>
        <h1>#{props.channelName}</h1>
        <ul className='messageList'>
            {messageList}
        </ul>

        <form className='messageBox' onSubmit={onSend}>
            <input type="text" value={message} onChange={onChange}></input>
            <button type='submit'>Send</button>
        </form>
        
    </div>
  )
}

export default TextChannel