import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import SchedulePage from '../SchedulePage/SchedulePage';
import BetPage from '../BetPage/BetPage';

import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import { getLeagueRecords } from '../../utils/sports-api';
import * as betsAPI from '../../utils/bets-api';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      bets: []
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const records = await getLeagueRecords();
    console.log(`hiiiiii`, records)
    // this.setState({
    //   team: records.table[0].played
    // })
  }

  async componentDidMount() {
    const bets = await betsAPI.getAll();
    this.setState({bets});
    console.log(this.state.bets[0].amount)
  }

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
           <BetPage bets={this.state.bets}/> 
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;