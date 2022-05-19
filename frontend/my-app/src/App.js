import { 
  Route, 
  Switch,
} from "react-router-dom";

import './App.css';

import MainPage from "./MainPage"
import Navigation from './Navigation';

import MainEntry from "./entry/MainEntry"
import MainSummary from "./summary/MainSummary"
import user_id from "./Global_vars"




function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route path="/entry" component={MainEntry} />
          <Route path="/summary" component={MainSummary} />
          <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
  );
}

export default App;