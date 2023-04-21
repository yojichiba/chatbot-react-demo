import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Crimson from '../assets/img/crimson.png';

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
    return (
        <ListItem className={classes}>
          <ListItemAvatar>
            {isQuestion ? (
                <Avatar alt="icon" src={Crimson} />
            ) : (
                <Avatar alt="icon" src={NoProfile} />
            )}
          </ListItemAvatar>
          <div className='p-chat__bubble'>
            {props.content}
          </div>
        </ListItem>
    )
}

export default Chat;