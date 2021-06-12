import { useState } from 'react';
import axios from 'axios';

const projectID = '5714e175-b84e-4ddd-bedd-64a0d0cf3d5e';
<div className="chat-subtitle">
{`${new Date().toLocaleString()}`}
</div>

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Let's Chat</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Let's Chat</span>
            </button>
          </div>
        </form>
        <h1 style={{color:'white',transition:'1s'}}>{error}</h1>
      </div>
    </div>
  );
};
export default LoginForm;