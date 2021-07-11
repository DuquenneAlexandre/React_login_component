import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import logo from './logo.svg';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  );
}

export default App;
