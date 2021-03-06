import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
  
    const chat = chats && chats[activeChat];
    
    const renderReadReceipts = (message,isMyMessage) =>{
       return chat.people.map((person,index) => person.last_read === message.id &&(
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage:`url(${person?.person?.avatar})`
                }}
            
            />
        ))
    }
    const renderMessages = () => {
        const keys = Object.keys(messages);
        
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;
      
            return(
                <div key= {`msg_${index}`} style={{width:'100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={message[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-recepints" style = {{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' :'68px'}}>
                            {renderReadReceipts(message,isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    if (!chat) return 'No current chat right now :(';
    return(
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                {`${new Date().toLocaleString()}`}
                </div>
                <div>
                    <form action="LoginForm.jsx">
                        <button style={{color:"white",background:"#8772a0"}} onClick={localStorage.clear()}>
                            Logout
                        </button>

                    </form>
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    );
}
      
export default ChatFeed;
