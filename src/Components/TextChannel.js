import React, { useState } from 'react'

function TextChannel(props) {
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    function onSend(e){
        e.preventDefault();
        if(!message) return;
        setMessageList(...messageList, <li>{message}</li>);
        setMessage("");
    }

    function onChange(e){
        setMessage(e.target.value);
    }

  return (
    <div>
        <h1>#{props.name}</h1>
        <ul>
            {messageList}
        </ul>

        <form onSubmit={onSend}>
            <input type="text" value={message} onChange={onChange}></input>
            <button type='submit'>Send</button>
        </form>
        
    </div>
  )
}

export default TextChannel