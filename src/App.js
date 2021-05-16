import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import Favorites from "./notes/Favorites";
import NoteDetail from "./notes/NoteDetail";
import EditForm from "./notes/EditForm";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/favorites' component={Favorites}/>
          <Route path='/note/:id' component={NoteDetail}/>
          <Route path='/editform/:id' component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
