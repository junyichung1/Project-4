import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import BetPage from '../BetPage/BetPage';
import AddBetPage from '../AddBetPage/AddBetPage';
import EditBetPage from '../EditBetPage/EditBetPage';
import TeamsPage from '../TeamsPage/TeamsPage'
import SchedulePage from '../SchedulePage/SchedulePage'
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import { getLeagueRecords } from '../../utils/sports-api';
import * as betsAPI from '../../utils/bets-api';
import * as sportsAPI from '../../utils/sports-api';
import 'bootstrap/dist/css/bootstrap.min.css'
import TeamSchedulePage from '../TeamSchedulePage/TeamSchedulePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      bets: [],
      teamSchedule: []
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null, bets: []})
  }

  formatNum(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  handleAddBet = async newBetData => {
    const newBet = await betsAPI.create(newBetData);
    this.setState(state => ({
      bets: [...state.bets, newBet]
    }),
    () => this.props.history.push('/'))
  }

  handleDeleteBet= async id => {
    await betsAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      bets: state.bets.filter(b => b._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleUpdateBet = async updatedBetData => {
    const updatedBet = await betsAPI.update(updatedBetData);
    const newBetsArray = this.state.bets.map(b => 
      b._id === updatedBet._id ? updatedBet : b
    );
    this.setState(
      {bets: newBetsArray},
      // This cb function runs after state is updated
      () => this.props.history.push('/')
    );
   }


  /*--- Lifecycle Methods ---*/


  handleSignupOrLogin = async () => {
    this.setState({user: userService.getUser()}, () => this.getUserBet()) 
  }
  

  async componentDidMount() {
    this.getUserBet()
  }


  async componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      const bets = await betsAPI.getAll();
      this.setState({
        bets
        });
    }
  }
  
  async getUserBet() {
    const bets = await betsAPI.getAll();
    this.setState({bets:bets});
  }
  
  async getTeamSchedule(id) {
    const teamSchedule = await sportsAPI.getTeamSchedule(id);
    this.setState({teamSchedule})
  }


  
  render() {
    return (
      <>
      <NavBar 
      user={this.state.user} 
      handleLogout={this.handleLogout}
      />
        <Switch>
          <Container>
          <Route exact path='/' render={() =>
           <BetPage 
           bets={this.state.bets}
           user={this.state.user}
           handleDeleteBet={this.handleDeleteBet}
           formatNum={this.formatNum}
           /> 
          }/>
           <Route exact path='/teams' render={() => 
          <TeamsPage
          getTeamSchedule={this.getTeamSchedule}
          />
           }/>
           <Route exact path='/schedule' render={() => 
          <SchedulePage
          />
           }/>
           <Route exact path='/schedule/:id' render={() => 
          <TeamSchedulePage 
          
          />
           }/>
          <Route exact path='/add' render={() =>
           <AddBetPage 
           handleAddBet={this.handleAddBet}
           user={this.state.user}
           /> 
          
          }/>

          <Route exact path='/edit' render={({location}) => 
          <EditBetPage
            handleUpdateBet={this.handleUpdateBet}
            location={location}
          />
          } />
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
      </Container>
        </Switch>
        </>
    );
  }
}

export default App;