import React from "react";
import MainPage from './components/Main/MainPage'
import MainSearch from './components/Main/MainSearch'
import CreateJourney from './components/Main/CreateJourney'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>



      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/findroute">Найти Маршрут</Link>
          </li>
          <li>
            <Link to="/createroute">Создать Маршрут</Link>
          </li>
        </ul>

      

       
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route path="/findroute">
            <MainSearch />
          </Route>

          <Route path="/createroute">
            <CreateJourney />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
