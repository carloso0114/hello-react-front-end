import {
  BrowserRouter, Link, Route, Switch,
} from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Link to="/greeting">Get greeting from the API</Link>} />
        <Route path="/greeting" render={() => <Greeting />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
