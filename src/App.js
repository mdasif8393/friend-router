import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import User from './components/User/User';

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route exact path = "/">
          <Home></Home>
        </Route>

        <Route path ="/user/:id">
          <User></User>
        </Route>

        <Router exact path = "*">
          <NotFound></NotFound>
        </Router>

      </Switch>

    </Router>
  );
}

export default App;
