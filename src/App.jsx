import { Redirect, Route, Switch } from "react-router";
import "./App.less";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import DetailPage from "./features/DetailPage";
import HomePage from "./features/HomePage";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect exact from="/" to="/posts" />

        <Route path="/posts" component={HomePage} />

        <Route path="/posts/:postsId" component={DetailPage} />

        <Route path="posts/:!postsId" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
