import React, {useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import sportsApi from '../../utils/sports-api'

const TeamSchedulePage = props => {
    console.log(props.teamSchedule)
    let { id } = useParams();
    const [teamSchedule, setTeamSchedule] = useState(null)

    useEffect(() => {
                sportsApi.getTeamSchedule(id).then(res => setTeamSchedule(res));
            }, [id])

    return (
        teamSchedule && 
        <div>
            
            {teamSchedule.events.map(event => (
                <div>{event.strFilename}</div>)
                )}
        </div>
        
    )
}

export default TeamSchedulePage;