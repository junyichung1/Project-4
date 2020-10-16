import React from "react";
import './TeamItem.css';
import TeamSchedulePage from '../../pages/TeamSchedulePage/TeamSchedulePage'

function TeamItem(props) {
    return (
        <>
        <div><form action={`/schedule/${props.team.idTeam}`}><button>{props.team.strTeam}</button></form></div>
        </>
    )
}

export default TeamItem;