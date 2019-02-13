import React from 'react';
import Message from '../components/Message.jsx';

const MessageList = props => {

  let messageArray = props.messageArray;
  console.log('logging messageArray: ', messageArray)

  let renderMessages = []

  messageArray.forEach((msg, i) => {
    //code here
    renderMessages.push(<Message key={i} id={i} message={messageArray[i].value} />)
  })



  return (
  <div>
    {renderMessages}
  </div>
  );
};

export default MessageList;
