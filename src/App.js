import "./App.css";
import Tabbar from "./components/Tabbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Mission from "./components/Mission";
import Rockets from "./components/Rockets";
import Stats from "./components/Stats";
import About from "./components/About";

function App() {
  return (
    <div className="Spacex">
      <h4 className="space_launch">SpaceX Launch and Mission Viewer</h4>
      <Tabbar />
      <Switch>
        <Route path="/" component={Mission} exact />
        <Route path="/rockets" component={Rockets} exact />
        <Route path="/stats" component={Stats} exact />
        <Route path="/about" component={About} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
