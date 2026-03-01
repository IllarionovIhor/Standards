import './App.css';
import SendEmail from './components/SendEmail';
import WeatherStatus from './components/WeatherStatus';

/**
 * Root application component for the Standards front-end demo.
 *
 * Renders the `SendEmail` and `WeatherStatus` widgets side-by-side.
 *
 * @returns {JSX.Element} The main application layout.
 */
function App() {
  return (
    <>
      <h1>Welcome!</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
        <SendEmail skipApi={true} />
        <WeatherStatus />
      </div>
    </>
  );
}

export default App;
