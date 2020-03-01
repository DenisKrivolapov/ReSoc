import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx"
import Nav from "./components/Nav/Nav.jsx"
import Profile from "./components/Profile/Profile.jsx"
import Dialogs from "./components/Dialogs/Dialogs.jsx"
import {BrowserRouter, Route} from "react-router-dom"
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from "./components/Friends/Friends"


const App = (props) => {
  return (
    <BrowserRouter>
      <div className = "app-wrapper">
        <Header />
        <Nav state ={props.state.friendsSection} />
        <div className ="app-wrapper-content">
          <Route path="/dialogs" render ={() => <Dialogs 
                                                         messagesPage = {props.state.messagesPage}
                                                         dispatch = {props.dispatch} 
                                                         />} />

          <Route path="/profile" render ={() => <Profile profilePage ={props.state.profilePage} 
                                                         dispatch = {props.dispatch}
                                                      
                                                         />} />
          <Route path="/music" render ={() => <Music />} />
          <Route path="/news" render ={() => <News />} />
          <Route path="/settings" render ={() => <Settings />}/>
          <Route path="/friends" render ={() => <Friends />}/>
        </div>
      </div>
    </BrowserRouter>
  );

}


export default App;
