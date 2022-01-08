import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Styles
import './App.css';

// Components
import Gamepage from './component/game24page/game24page';
import Firstpage from './component/firstapge/firstpage';
import LastPage from './component/Lastpage/LastPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' >
            <Firstpage/>
          </Route>
          <Route path='/Gamepage' >
            <Gamepage />
          </Route>
        </Switch>
        <Switch>
          <Route path='/ScoreBoard'>
            <LastPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
