import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import Post from './Components/Post/Post';
import Postdetails from './Components/Postdetails.js/Postdetails';

function App() {
  return (
    <Router>
      <Switch>

        <Route path exact = "/">
          <Home/>
        </Route>

        <Route path = "/home">
          <Home/>
        </Route>

        <Route path = "/home/post">
          <Post/>
        </Route>

        <Route path = "/post/:id">
          <Postdetails/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
