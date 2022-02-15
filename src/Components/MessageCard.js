import React from 'react'
import discordIconYellow from '../icons/discordIconYellow.png'

function MessageCard(props) {
  return (
    <div className='messageCardContainer'>
        <div> 
            <img className='userIcon' src={discordIconYellow}></img>
            
        </div>
        <div className='textPanel'>
            <div className='userName'>{props.user}</div>
            <div>{props.msg}</div>
        </div>
    </div>
  );
}

export default MessageCard