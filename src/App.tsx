import './App.css';
import { Case, Default, Switch } from './utils/conditionalRendering';

function App() {
  const userContext = { name: 'John' };
  const unAuthorized = { name: 'Doe' };

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Case condition={userContext.name === unAuthorized.name}><span>You are logged in!</span></Case>
          <Default><span>Please log in first!</span></Default>
        </Switch>
      </header>
    </div>
  );
}

export default App;
