import './App.css';
import { Case, Default, Switch } from './utils/conditionalRendering';
import { z } from 'zod';

function App() {
  const userContext = { name: 'John' };
  const unAuthorized = { name: 'Doe' };

  const schema = z.object({
    test: z.string(),
  });

  const handleSubmit = () => {
    try {
      schema.parse(unAuthorized);
    } catch (error) {}
  }

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Case condition={userContext.name !== unAuthorized.name}>
            <>
              <span>You are logged in!</span>
              <button type="button" onClick={handleSubmit}>Click here</button>
            </>
          </Case>
          <Default><span>Please log in first!</span></Default>
        </Switch>
      </header>
    </div>
  );
}

export default App;
