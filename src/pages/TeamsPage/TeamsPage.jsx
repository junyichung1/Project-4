import React, { Component, useState, useEffect } from 'react';
import sportsApi from '../../utils/sports-api';
import TeamItem from '../../components/TeamItem/TeamItem'
import { CardColumns } from 'react-bootstrap';
import './TeamsPage.css'


class TeamsPage extends Component {
    constructor() {
    super();
    this.state = {
        teams: [],

        };
    }

    async componentDidMount() {
            const teams = await sportsApi.getTeams();
            this.setState({teams: teams.teams})
            // console.log(`this is sports`, teams[0])
        }
      

render() {
    // const sportsTeams =
    // console.log(team)
    return (
    <div className="page">
    <h1 className="title">NFL Teams</h1> 
    <CardColumns>
             {this.state.teams.map(team => (
            <TeamItem 
            team={team}
            key={team.IDteam}
            getTeamSchedule={this.props.getTeamSchedule}
            />
            ))}
            </CardColumns> 
             </div>
    )
}

    /* return (
        <>

        <h1>NFL Teams</h1>     
    <div>{sportsTeams}</div>             
        </>
)

}
    
} */}

export default TeamsPage;