import React from 'react';
import List from '@mui/material/List';
import {Chat} from './index.js';
import { styled } from '@mui/material/styles';


const ChatList = styled(List)(({ theme }) => ({
    height: "400px",
    padding: "0",
    overflow: "auto"
}));

const Chats = (props) => {
    return (
        <ChatList id={"scroll-area"} >
            {props.chats.map((value, index) => {
                return <Chat content={value.text} key={index.toString()} type={value.type} />
            })}
        </ChatList>
    )
}

export default Chats;