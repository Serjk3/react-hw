import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { SecondPage } from "./components/Pages/SecondPage";
import { ThirdPage } from "./components/Pages/ThirdPage";
import { GitPage } from "./components/Pages/GitPage";

const Home = () => <div>HOME</div>;

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/SecondPage" component={SecondPage} />
        <Route exact path="/ThirdPage" component={ThirdPage} />
        <Route exact path="/Search" component={GitPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

// commit
