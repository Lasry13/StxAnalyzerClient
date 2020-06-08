import React, {Component} from 'react';
import './App.css';
import Login from './User/Login'
import NavBar from './Common/NavBar'
import {Route, Switch} from 'react-router-dom';
import ForgotPassword from "./User/ForgotPassword";
import SignUp from "./User/SignUp";
import Analytics from "./Analytics/Analytics";
import Marketplace from "./Marketplace/Marketplace";
import Summary from "./Summary/Summary";
import HomePage from "./HomePage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <main>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/forgotPassword">
                            <ForgotPassword/>
                        </Route>
                        <Route path="/signUp">
                            <SignUp/>
                        </Route>
                        <Route path="/homePage">
                            <NavBar/>
                            <HomePage/>
                        </Route>
                        <Route path="/summary">
                        <NavBar/>
                        <Summary/>
                        </Route>
                        <Route path="/marketplace">
                            <NavBar/>
                            <Marketplace/>
                        </Route>
                        <Route path="/models">
                            <NavBar/>
                        </Route>
                        <Route path="/analytics">
                            <NavBar/>
                            <Analytics/>
                        </Route>
                        <Route path="/user">
                            <NavBar/>
                        </Route>
                    </Switch>
                </main>
            </div>

        );
    }
}

export default App;
