
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Heroes } from './pages/heroes';
import { Hero } from './pages/hero';

export const App = () => (
  <Router>


    {/* <Switch> рендерит первый <Route>, совпавший с URL */}
    <Switch>
      <Route path="/heroes/:id">
        <Hero />
      </Route>
      <Route path="/heroes">
        <Heroes />
      </Route>
      <Route path="/">
        <Redirect to='/heroes' />
      </Route>
    </Switch>
  </Router>
)
