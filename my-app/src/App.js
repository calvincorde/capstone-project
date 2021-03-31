import './App.css';

import { 
  Route, 
  Switch,
} from "react-router-dom";

import MainPage from "./MainPage"
import Navigation from './Navigation';

import MainEntry from "./entry/MainEntry"
import MainSummary from "./summary/MainSummary"




function App() {
  return (
    <div className="App">
      <Navigation />
        <Switch>
          <Route path="/entry" component={MainEntry} />
          <Route path="/summary/MainSummary" component={MainSummary} />
          <Route exact path="/" component={MainPage} />
        </Switch>
    </div>
  );
}

export default App;