import React from "react";
import './TeamItem.css';
import TeamSchedulePage from '../../pages/TeamSchedulePage/TeamSchedulePage'

function TeamItem(props) {
// console.log(props.team)
    return (
        <>
        <div><form action={`/schedule/${props.team.idTeam}`}><button onClick={() => props.getTeamSchedule(props.team.idTeam)}>{props.team.strTeam}</button></form></div>
        </>
    )
}

export default TeamItem;