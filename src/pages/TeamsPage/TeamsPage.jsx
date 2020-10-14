import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import sportsApi from '../../utils/sports-api';
import TeamItem from '../../components/TeamItem'

class TeamsPage extends Component {
    constructor() {
      super();
      this.state = {
        teams: [],

      };
    }

    async componentDidMount() {
        console.log(`hello World`)
        const sports = await sportsApi.getTeams();
        console.log(`this is sports`, sports)
        this.setState({sports})
    }

      render() {
        //   this.state.
          return (
            <>
              
                  <Route exact path='/teams' render={() =>
                  <TeamItem 
                  />
                  }/>

               

            </>
              )
    }
}