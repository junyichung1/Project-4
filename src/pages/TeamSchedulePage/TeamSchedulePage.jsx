import React, {useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import sportsApi from '../../utils/sports-api'
import { Card } from 'react-bootstrap'

const TeamSchedulePage = props => {
    console.log(props.teamSchedule)
    let { id } = useParams();
    const [teamSchedule, setTeamSchedule] = useState(null)

    useEffect(() => {
                sportsApi.getTeamSchedule(id).then(res => setTeamSchedule(res));
            }, [id])

    return (
        teamSchedule && 
        
        <div style={{display: "flex", width: "100%", flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: "center"}}>
            
            {teamSchedule.results.map(result => (
                // <div>{result.strFilename}</div>
                <>
                <Card style={{width: "15rem", margin: '5px', boxShadow: '1px 2px 5px red'}}>
            <Card.Body style={{fontWeight: "bold", fontSize: "24px", textAlign: "center"}}>{result.dateEvent}</Card.Body>
    <Card.Img variant="top" src={result.strThumb} />
    <Card.Body style={{display: "flex", justifyContent: "space-around", fontWeight: "bold"}}>
      <Card.Text>
        {result.strHomeTeam}: {result.intHomeScore} 
      </Card.Text>
      <Card.Text>@</Card.Text>
      <Card.Text>
      {result.strAwayTeam}: {result.intAwayScore}
      </Card.Text>
    </Card.Body>
  </Card>
  
  </>
                )
                )}
        </div>
        
    )
}

export default TeamSchedulePage;