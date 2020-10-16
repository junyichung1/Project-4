import React, { Component, useState, useEffect } from 'react';
import sportsApi from '../../utils/sports-api';
import TeamItem from '../../components/TeamItem/TeamItem'

// function TeamsPage() {
//     const [teams, setTeams] = useState([])
    
    
//     useEffect(() => {
//         sportsApi.getTeams().then(res => setTeams(res));
//     }, [])
    
//     console.log(teams)
    

//     return (
//         <div>
//             <h1>All Teams</h1>
//             <h2>{}</h2>
//         </div>
//     )
// }



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
const sportsTeams = this.state.teams.map(team => {
    // console.log(team)
    return <div>
            <TeamItem 
            team={team}
            key={team.IDteam}
            getTeamSchedule={this.props.getTeamSchedule}
            />
        </div> 
})

    return (
        <>

        <h1>All Teams</h1>     
    <div>{sportsTeams}</div>             
        </>
)

}
    
}

export default TeamsPage;