import { useRef } from 'react'
import './App.css'
import SendEmail from './components/SendEmail'
import Notifications from './components/Notifications'
import WeatherStatus from './components/WeatherStatus';

function App() {
  const notificationsRef = useRef();

  // Example: show notification on login (future use)
  const handleLogin = () => {
    notificationsRef.current.show({
      severity: "success",
      summary: "Login",
      detail: "Logged in successfully!",
      life: 3000
    });
  };

  return (
    <>
      <h1>Welcome!</h1>
      {/* <button onClick={handleLogin}>Simulate Login</button> */}
      <div style={{display: 'flex', justifyContent: "space-evenly", width: '100%'}}>
        <SendEmail notify={notificationsRef} />
        <WeatherStatus />
      </div>
      <Notifications ref={notificationsRef} />
    </>
  )
}

export default App
