import { ChatEngine } from 'react-chat-engine';
import LoginForm from './Components/LoginForm';
import ChatFeed from './Components/ChatFeed';
import './App.css';


const App = () => {
    
    if(!localStorage.getItem('username')) {return<LoginForm/>}
    return(
        <ChatEngine
        height="100vh"
        projectID="5714e175-b84e-4ddd-bedd-64a0d0cf3d5e"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
        
    );
    
}
export default App;