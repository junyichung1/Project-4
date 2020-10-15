import React, { Component, useState, useEffect } from 'react';
// import {Switch, Route} from 'react-router-dom';
import sportsApi from '../../utils/sports-api';
// import TeamItem from '../../components/TeamItem'

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
            console.log(`hello World`)
            const teams = await sportsApi.getTeams();
            this.setState({teams})
            console.log(`this is sports`, teams)
        }
        

        render() {
            
            return (
                <>
            
                <h1>All Teams</h1>     
                                
            </>
        )
    }
                
}

                        export default TeamsPage;