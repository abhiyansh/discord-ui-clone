import React from 'react'
import discordIconYellow from '../icons/discordIconYellow.png'

function UserCard(props) {

  return (
    <div className='userCardContainer'>
        <img className='userIcon' src={discordIconYellow} alt='Discord User Icon'></img>
        <div className='userName'> {props.user}
            <div className='userId'>#{props.userId}</div>
        </div>    
    </div>
  );
}

export default UserCard